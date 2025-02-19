# Website Architecture

## Technology Stack
- **HTML5/CSS3** - Core structure and styling
- **Tailwind CSS** (via CDN) - Utility-first CSS framework for responsive design
- **Vanilla JavaScript** - Minimal interactivity for mobile menu and smooth scroll
- **Google Fonts** - CDN-hosted Montserrat and Open Sans fonts

## Implementation Strategy

### 1. Core Structure
```
personal-site/
├── index.html          # Homepage
├── articles/           # Blog content directory
├── projects/          # Project showcase directory
├── assets/
│   ├── css/           # Custom CSS overrides
│   ├── js/            # Minimal interaction scripts
│   └── images/        # Optimized web assets
```

### 2. Key Design Elements
- **Color Scheme**
  - Primary Blue: #0056B3
  - Background: White
  - Footer Accent: Lighter blue shade

- **Typography**
  - Headings: Montserrat Bold
  - Body: Open Sans Regular
  - Font Loading: Optimized with `font-display: swap`

### 3. Responsive Design
- Mobile-first approach using vanilla CSS media queries
- CSS Grid/Flexbox for modern layouts
- Responsive images using HTML `picture` element
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### 4. Performance Considerations
- Image optimization for fast loading
- CDN usage for fonts and Tailwind
- Minimal JavaScript footprint
- GitHub Pages optimized structure

### 5. GitHub Pages Deployment
- Using root directory for deployment
- All paths relative to root
- `.nojekyll` file to bypass Jekyll processing

### 6. Browser Support
- Modern browsers (last 2 versions)
- Graceful degradation for older browsers
- Progressive enhancement for JavaScript features

## Development Guidelines
1. Mobile-first development workflow
2. Semantic HTML structure
3. CSS utility classes via Tailwind
4. Vanilla JavaScript with no dependencies
5. Optimized assets before commit
6. Regular testing across devices/browsers

## Next Steps
1. Initialize basic HTML structure
2. Implement core styling with Tailwind
3. Build responsive navigation
4. Create layout templates
5. Integrate content sections
6. Test and optimize
