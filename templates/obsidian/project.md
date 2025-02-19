---
title: "<% tp.file.title %>"
date: <% tp.date.now("YYYY-MM-DD") %>
description: ""
technologies: []
image: ""
demo_url: ""
source_url: ""
---

<%*
// Prompt for project details
let description = await tp.system.prompt("Enter project description")
let techs = await tp.system.prompt("Enter technologies (comma-separated)")
let image = await tp.system.prompt("Enter image filename (optional)")
let demo = await tp.system.prompt("Enter demo URL (optional)")
let source = await tp.system.prompt("Enter source code URL (optional)")

// Format technologies array
let techArray = techs.split(',').map(t => t.trim()).filter(t => t)

// Update front matter
tR += `description: "${description}"\n`
tR += `technologies: [${techArray.map(t => `"${t}"`).join(', ')}]\n`
if (image) tR += `image: "${image}"\n`
if (demo) tR += `demo_url: "${demo}"\n`
if (source) tR += `source_url: "${source}"\n`
tR += "---\n\n"
_%>

# Project Overview

[Brief introduction to the project and its purpose]

## Features

- Feature 1
- Feature 2
- Feature 3

## Technical Details

### Technology Stack

<%* techArray.forEach(tech => { _%>
- **<% tech %>**: [Describe how this technology was used]
<%* }) _%>

## Challenges & Solutions

### Challenge 1
[Describe the challenge and how it was overcome]

### Challenge 2
[Describe the challenge and how it was overcome]

## Implementation Details

[Provide technical details about the implementation]

### Architecture

[Describe the project's architecture]

### Key Components

[List and describe key components]

## Results

### Achievements

- Achievement 1
- Achievement 2
- Achievement 3

### Metrics

[Include any relevant metrics or performance data]

## Future Improvements

- [ ] Potential improvement 1
- [ ] Potential improvement 2
- [ ] Potential improvement 3

---
*Last Updated: <% tp.date.now("MMMM D, YYYY") %>*
