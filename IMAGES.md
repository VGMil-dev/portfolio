# Image Generation Prompts

This document contains prompts to generate specific assets for the "Architectural Prestige" portfolio. The images should be generated with a high-end AI image generator like Midjourney (v6) or DALL-E 3.

## 1. Hero Background (Abstract Geometry)
- **Prompt:** A highly sophisticated, 8k resolution, minimalist architectural abstract geometry. Clean lines, deep oceanic teal (#004B57) intersecting with extremely subtle brushed gold accents. The composition should have heavy negative space and feel like a luxury tech brand's blueprint or structural schematic. Soft ambient lighting, shallow depth of field, no neon, no cyberpunk, ultra-refined, professional corporate aesthetic.
- **Where to place:** Place this image as `hero-bg.jpg` in `public/images/`.
- **Usage:** It will be referenced in `src/components/Hero.tsx` as a subtle, low-opacity background image or texture overlay to give depth to the hero section.

## 2. Stitch 626 Abstract Logo
- **Prompt:** A minimalist, highly stylized geometric abstract icon loosely representing the silhouette of Stitch (Experiment 626). Rendered as a flat, premium brushed gold metallic emblem against a pure white background. The design must be extremely simplified, resembling a high-end corporate logo or architectural firm's monogram. Sharp angles, clean curves, elegant, vector style, luxury tech.
- **Where to place:** Extract the logo (remove background) and place it as `logo.svg` or `logo.png` in `public/icons/`.
- **Usage:** It will be used in `src/components/Header.tsx` as the main navigation logo.

## 3. Project 1: Transactional Ecosystem (Clean Architecture)
- **Prompt:** A high-end, 3D rendered isometric abstract representation of a software architecture. Clean modular blocks in deep teal and crisp white, connected by thin brushed gold glowing lines (representing data flow). The structure looks like a modern, minimalist city or server cluster. Soft studio lighting, 8k, photorealistic, luxury technology, structural integrity.
- **Where to place:** Place this image as `project-ecosystem.jpg` in `public/images/projects/`.
- **Usage:** Used as the thumbnail in `src/components/ProjectCard.tsx` for the "Transactional Ecosystems" project.

## 4. Project 2: Microservices & CI/CD
- **Prompt:** A minimalist, premium abstract visual of interconnected nodes and automated pipelines. Smooth white spheres and deep teal cubes arranged in a precise grid, linked by subtle gold pathways. Macro photography style, soft focus background, clean, corporate, high-end engineering, no chaotic wires, highly organized.
- **Where to place:** Place this image as `project-cicd.jpg` in `public/images/projects/`.
- **Usage:** Used as the thumbnail in `src/components/ProjectCard.tsx` for the "Fragments CI/CD" project.

## 5. Geometric Watermark (Stitch Silhouette Pattern)
- **Prompt:** A seamless, barely visible watermark pattern. Extremely thin, light gray architectural drafting lines forming abstract, tessellated shapes inspired by Stitch (Experiment 626) ears and silhouette. White background, 2% contrast, ultra-minimalist, luxury stationery texture, elegant vector pattern.
- **Where to place:** Place this as `watermark-pattern.svg` or `watermark-pattern.png` in `public/images/`.
- **Usage:** Used as a repeating background (`bg-repeat`) on the main `App.tsx` layout for subtle texture.