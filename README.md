# Personal Website

A modern, responsive personal website with a markdown-based content management system.

## Features
- Responsive design with Tailwind CSS
- Markdown-based content management
- Automated build process
- Mobile-friendly navigation
- Consistent design system

## Getting Started

### Prerequisites
- Node.js installed
- npm (Node Package Manager)

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development
#### Using Obsidian (Recommended)
1. Copy the templates from `templates/obsidian/` to your Obsidian templates folder
2. Install the Templater plugin in Obsidian
3. Create new content using the templates:
   - For articles: Use `article.md` template
   - For projects: Use `project.md` template
4. The templates will guide you through entering metadata
5. Save files in the appropriate `_posts/` or `_projects/` directory
6. Run `npm run build` to generate the site

#### Manual Content Creation
1. **For Articles:**
   - Create a new markdown file in `_posts/` directory
   - Use the format: `YYYY-MM-DD-title.md`
   - Include front matter:
   ```markdown
   ---
   title: "Your Article Title"
   date: YYYY-MM-DD
   description: "Brief description of your article"
   category: "Category"
   ---

   Your article content in markdown...
   ```

2. **For Projects:**
   - Create a new markdown file in `_projects/` directory
   - Include front matter:
   ```markdown
   ---
   title: "Project Title"
   date: YYYY-MM-DD
   description: "Brief project description"
   technologies: ["Tech1", "Tech2"]
   image: "project-image.jpg"
   demo_url: "https://demo.url" # optional
   source_url: "https://source.url" # optional
   ---

   Project content in markdown...
   ```

3. **Build the Site:**
```bash
npm run build
```

### Project Structure
```
personal-site/
├── _posts/             # Markdown files for articles
├── _projects/          # Markdown files for projects
├── assets/
│   ├── css/           # Custom styles
│   ├── js/            # JavaScript files
│   └── images/        # Image assets
├── template.html       # Page template for articles/projects
├── index-template.html # Homepage template
├── templates/
│   └── obsidian/      # Obsidian Templater templates
└── build.js           # Build script
```

## Customization

### Styling
- Modify `assets/css/custom.css` for custom styles
- Update Tailwind configuration in templates for theme changes

### Templates
- Edit `template.html` for article/project page layout
- Edit `index-template.html` for homepage layout
- Edit templates in `templates/obsidian/` for Obsidian integration

## Build Process
The build script:
1. Processes markdown files
2. Applies templates
3. Generates HTML pages
4. Updates index page with latest content

## License
MIT License

## Version History
See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

## Deployment

   Project content in markdown...
   ```

3. **Build the Site:**
```bash
npm run build
```

### Project Structure
```
personal-site/
├── _posts/             # Markdown files for articles
├── _projects/          # Markdown files for projects
├── assets/
│   ├── css/           # Custom styles
│   ├── js/            # JavaScript files
│   └── images/        # Image assets
├── template.html       # Page template for articles/projects
├── index-template.html # Homepage template
└── build.js           # Build script
```

## Customization

### Styling
- Modify `assets/css/custom.css` for custom styles
- Update Tailwind configuration in templates for theme changes

### Templates
- Edit `template.html` for article/project page layout
- Edit `index-template.html` for homepage layout

## Adding Content
1. Create new markdown file in appropriate directory
2. Add required front matter
3. Write content in markdown
4. Run build script
5. Commit and push changes

## Build Process
The build script:
1. Processes markdown files
2. Applies templates
3. Generates HTML pages
4. Updates index page with latest content

## License
MIT License

## Version History
See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

## Deployment
Before deploying the site, please review and complete all items in the [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) to ensure all necessary customizations and optimizations are complete.
