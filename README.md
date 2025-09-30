# Swayambhu Stories Website

Welcome to the official repository for **Swayambhu Stories**. This website serves as a digital platform to preserve and share the rich cultural heritage of the Swayambhu Mahachaitya temple in Nepal through immersive content, educational resources, and interactive experiences.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Development Guide](#development-guide)
- [License](#license)

## Overview
Swayambhu Stories is a public-facing, community-engaged project that combines digital preservation techniques with cultural storytelling. The website serves as a platform to:
- Document and preserve Swayambhu's cultural heritage
- Share stories and knowledge from community stakeholders
- Provide interactive ways to explore the temple complex
- Support educational and research initiatives

## Features
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Glass-morphism effects and dark theme
- **Interactive Elements**: 
  - Image galleries with cultural content
  - Smooth scrolling navigation
  - Animated transitions
- **Accessibility**: WCAG compliance and semantic HTML
- **Performance**: Optimized image loading and animations
- **Unity Integration**: 3D model exploration (in Unity subdirectory) //MAY NEED TO CHANGE TO THREE.JS

## Project Structure
```
Swayambhu-Stories-Website/
├── index.html              # Main landing page
├── about.html             # About page with mission and impact
├── static/
│   └── style.css         # Main stylesheet (organized by components)
├── images/               # Optimized image assets
├── Unity/               # Unity WebGL build files
├── script.js            # Core JavaScript functionality
└── Documents/          # Project documentation
```

## Tech Stack
- **Frontend Core**:
  - HTML5 (Semantic markup)
  - CSS3 (Custom Properties, Flexbox)
  - JavaScript (ES6+)
- **Libraries & Frameworks**:
  - Font Awesome 6.4.0
  - Inria Sans (Google Fonts)
- **3D Experience**:
  - Unity WebGL
- **Hosting**:
  - NGINX server on Carolina Cloudapps

## Setup Instructions

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/[username]/Swayambhu-Stories-Website.git
   ```
2. Start a local server:
   ```bash
   python -m http.server 8080
   ```
3. Visit http://localhost:8080

### Carolina Cloudapps Deployment
1. Visit https://cloudapps.unc.edu/
2. Sign in with your ONYEN account
3. Click '+Add' → 'Import from Git'
4. Configure:
   - Repository URL: [your-repo-url]
   - Application name: swayambhu-stories
   - Builder: NGINX
5. Click 'Create'

## Development Guide

### Code Style
- Use semantic HTML5 elements
- Follow BEM naming for CSS classes
- Maintain dark theme compatibility
- Keep accessibility in mind
- Document complex functions

### CSS Organization
- Custom properties for theming
- Component-based organization
- Mobile-first responsive design
- Minimal specificity

### Image Guidelines
- Optimize all images
- Use descriptive alt text
- Maintain aspect ratios
- Provide fallbacks

### Performance Considerations
- Lazy load images
- Minimize JavaScript
- Use CSS transforms
- Cache appropriately

## License
© 2025 Swayambhu Stories Project. All rights reserved.
This repository is not open for external contributions without explicit permission.

