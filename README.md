# AI Master Portfolio Showcase

![GitHub last commit](https://img.shields.io/github/last-commit/chaitanya-maddala-236/ai-master-portfolio-showcase)
![GitHub repo size](https://img.shields.io/github/repo-size/chaitanya-maddala-236/ai-master-portfolio-showcase)
![GitHub stars](https://img.shields.io/github/stars/chaitanya-maddala-236/ai-master-portfolio-showcase?style=social)

A modern, responsive portfolio website showcasing my expertise in AI, Machine Learning, and Software Development. This project demonstrates both my technical skills and design sensibilities through an interactive and visually appealing user interface.

## 🌟 Live Demo

[Visit the Portfolio](https://chaitanyadev.vercel.app/)

![image](https://github.com/user-attachments/assets/447599a5-8e23-4200-831c-707c5205be90)

## 📋 Portfolio Overview

The portfolio features a sleek, modern design with a dark theme and gradient accents:

- **Navigation**: Clean, intuitive navigation with About, Skills, Experience, Projects, and Contact sections
- **Hero Section**: Features a gradient-animated name display with the title "AI & MACHINE LEARNING ENGINEER"
- **Tagline**: "Transforming Data into Intelligent Solutions" 
- **Call-to-Action Buttons**: "View Projects" and "Contact Me" for easy navigation
- **Social Links**: Quick access to professional profiles and contact information

## ✨ Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive UI**: Smooth animations and transitions for an engaging user experience
- **Dark/Light Mode**: Toggle between themes based on user preference
- **Project Showcase**: Detailed presentation of AI/ML projects with descriptions and links
- **Skills Visualization**: Interactive displays of technical and soft skills
- **Experience Timeline**: Visual representation of professional journey
- **Blog Integration**: Showcasing AI-related writings and publications
- **Contact Form**: Easy-to-use communication channel for visitors

## 🛠️ Technologies Used

- **Frontend Framework**: React.js with Next.js
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for smooth transitions
- **Deployment**: Vercel for continuous deployment
- **Form Handling**: EmailJS for contact form functionality
- **Content Management**: Markdown for blog posts
- **Version Control**: Git & GitHub

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/chaitanya-maddala-236/my-portfolio
   ```

2. Navigate to the project directory
   ```bash
   cd my-portfolio
   ```

3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio

## 📁 Project Structure

```
my-portfolio/
├── components/               # Reusable UI components
│   ├── layout/               # Layout components (Header, Footer, etc.)
│   ├── sections/             # Page sections (Hero, About, Projects, etc.)
│   └── ui/                   # UI elements (Buttons, Cards, etc.)
├── lib/                      # Utility functions and helpers
├── pages/                    # Next.js pages
│   ├── api/                  # API routes for form handling
│   ├── blog/                 # Blog posts and articles
│   └── projects/             # Individual project pages
├── public/                   # Static assets
│   ├── assets/               # Images, icons, and other media
│   └── resume/               # Resume files
├── styles/                   # Global styles and Tailwind configuration
├── data/                     # JSON files for portfolio content
│   ├── projects.json         # Project details
│   ├── experience.json       # Work experience
│   └── skills.json           # Skills and proficiency
└── utils/                    # Helper functions
```

## 🔧 Customization

### Personal Information

Update your personal information in the `data/` directory:

- `data/personal.json`: Update your name, titles, and contact information
- `data/experience.json`: Add or modify your work experience
- `data/education.json`: Update your educational background
- `data/projects.json`: Showcase your projects with descriptions and links
- `data/skills.json`: List your technical and soft skills

### Styling

- Customize colors and typography in `tailwind.config.js`
- Update the global styles in `styles/globals.css`

## 📝 Adding Content

### Projects

Add a new project by creating a new entry in `data/projects.json`:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "Project description",
  "image": "/assets/projects/project-image.png",
  "tags": ["AI", "Machine Learning", "Python"],
  "github": "https://github.com/yourusername/project-repo",
  "demo": "https://project-demo-url.com",
  "featured": true
}
```

### Blog Posts

Add a new blog post by creating a Markdown file in `pages/blog/`:

```
---
title: "Blog Post Title"
date: "2023-05-15"
excerpt: "Short description of the blog post"
coverImage: "/assets/blog/cover-image.jpg"
tags: ["AI", "Machine Learning", "Tutorial"]
---

Blog post content in Markdown format.
```

## 🔍 SEO Optimization

The portfolio is optimized for search engines with:

- Meta tags for each page
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## 📱 PWA Support

The portfolio is configured as a Progressive Web App (PWA), allowing users to install it on their devices for offline access.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- LinkedIn: [Chaitanya Maddala](https://www.linkedin.com/in/chaitanya-maddala236/)
- GitHub: [chaitanya-maddala-236](https://github.com/chaitanya-maddala-236)
- LeetCode: [AI_MASTER](https://leetcode.com/u/AI_MASTER/)
- Email: chaitanyaa.2006@gmail.com

---

