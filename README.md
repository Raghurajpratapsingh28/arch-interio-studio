# Next.js Portfolio Website

This is a [Next.js](https://nextjs.org/) portfolio website that showcases creative projects and services. The project uses static JSON files for data management instead of a CMS.

## Features

- **Static Data Management**: Uses JSON files in the `data/` directory for all content
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Modern UI**: Clean and modern interface with smooth animations
- **Blog System**: Simple blog with static content
- **Project Showcase**: Portfolio of works with detailed project information
- **Services Page**: Service offerings with descriptions
- **Gallery**: Image gallery showcasing work samples

## Data Structure

The website uses the following JSON files for content:

- `data/homepage.json` - Homepage content including hero, about, and expertise sections
- `data/works.json` - Portfolio projects and works
- `data/services.json` - Service offerings and descriptions
- `data/gallery.json` - Image gallery content
- `data/posts.json` - Blog posts and articles
- `data/header.json` - Navigation menu structure

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── blog/           # Blog pages
│   ├── gallery/        # Gallery page
│   ├── services/       # Services page
│   ├── works/          # Works/portfolio page
│   └── page.tsx        # Homepage
├── components/         # Reusable components
├── data/              # JSON data files
├── libs/              # Utility functions and data services
├── public/            # Static assets and images
└── utils/             # Utility functions
```

## Customization

To update content, simply edit the JSON files in the `data/` directory:

1. **Homepage**: Edit `data/homepage.json` for hero content, about section, and expertise
2. **Projects**: Edit `data/works.json` to add or modify portfolio projects
3. **Services**: Edit `data/services.json` to update service offerings
4. **Blog**: Edit `data/posts.json` to add new blog posts
5. **Gallery**: Edit `data/gallery.json` to update image gallery

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Fast Marquee** - Smooth scrolling text animations
- **GSAP** - Advanced animations and transitions

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
