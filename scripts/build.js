const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');
const frontMatter = require('front-matter');
const Handlebars = require('handlebars');

// Configure marked for code highlighting
marked.setOptions({
    breaks: true,
    gfm: true
});

// Register Handlebars helpers
Handlebars.registerHelper('formatDate', function(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});

async function compileTemplate() {
    const templateContent = await fs.readFile('src/templates/base.html', 'utf-8');
    return Handlebars.compile(templateContent);
}

async function processMarkdownFile(filePath, template, outputDir) {
    const content = await fs.readFile(filePath, 'utf-8');
    const { attributes, body } = frontMatter(content);
    
    // Convert markdown to HTML
    const htmlContent = marked(body);
    
    // Combine with template
    const html = template({
        ...attributes,
        content: htmlContent
    });

    // Create output filename
    const baseName = path.basename(filePath, '.md');
    const outputPath = path.join('docs', outputDir, `${baseName}.html`);

    // Ensure output directory exists
    await fs.mkdir(path.join('docs', outputDir), { recursive: true });
    
    // Write the file
    await fs.writeFile(outputPath, html);
    console.log(`Generated: ${outputPath}`);

    return {
        ...attributes,
        url: `/${outputDir}/${baseName}.html`,
        date: new Date(attributes.date)
    };
}

async function copyAssets() {
    // Create assets directory in docs
    await fs.mkdir('docs/assets', { recursive: true });
    
    // Copy assets directory
    const copyDir = async (src, dest) => {
        await fs.mkdir(dest, { recursive: true });
        const entries = await fs.readdir(src, { withFileTypes: true });
        
        for (let entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            
            if (entry.isDirectory()) {
                await copyDir(srcPath, destPath);
            } else {
                await fs.copyFile(srcPath, destPath);
            }
        }
    };

    await copyDir('src/assets', 'docs/assets');
    console.log('Assets copied to docs/assets');
}

async function buildSite() {
    try {
        const template = await compileTemplate();
        
        // Process posts
        const posts = [];
        const postsDir = path.join(process.cwd(), 'src/_posts');
        const postFiles = await fs.readdir(postsDir);
        
        for (const file of postFiles) {
            if (path.extname(file) === '.md') {
                const post = await processMarkdownFile(
                    path.join(postsDir, file),
                    template,
                    'articles'
                );
                posts.push(post);
            }
        }
        
        // Process projects
        const projects = [];
        const projectsDir = path.join(process.cwd(), 'src/_projects');
        const projectFiles = await fs.readdir(projectsDir);
        
        for (const file of projectFiles) {
            if (path.extname(file) === '.md') {
                const project = await processMarkdownFile(
                    path.join(projectsDir, file),
                    template,
                    'projects'
                );
                projects.push(project);
            }
        }

        // Sort posts and projects by date
        posts.sort((a, b) => b.date - a.date);
        projects.sort((a, b) => b.date - a.date);

        // Process index template
        const indexTemplate = Handlebars.compile(
            await fs.readFile('src/templates/index.html', 'utf-8')
        );
        const indexHtml = indexTemplate({ posts, projects });
        await fs.writeFile('docs/index.html', indexHtml);

        // Copy assets
        await copyAssets();

        console.log('Site build completed successfully!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

buildSite();
