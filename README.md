# Freck Studio Landing Page

This is the official landing page for **Freck Studio**, built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/). The site showcases Freck Studio's portfolio, services, testimonials, and contact information in a modern, responsive design.

## Features

-   **Modern UI**: Sleek, animated, and responsive design for all devices.
-   **Portfolio Showcase**: Highlighted case studies and projects.
-   **Contact Forms**: Integrated contact and email overlays for easy communication.
-   **Dark/Light Theme**: Toggle between dark and light modes.
-   **Custom Animations**: Smooth transitions and interactive elements using Framer Motion.
-   **Optimized Assets**: Web-optimized images and videos for fast loading.

## Tech Stack

-   [Next.js](https://nextjs.org/) (App Router)
-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion/)

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```
2. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production:**
    ```bash
    npm run build
    npm start
    ```

## Project Structure

-   `src/app/` — Main app pages and layout
-   `src/components/` — Reusable UI components
-   `src/contexts/` — React context providers (e.g., theme, overlays)
-   `src/hooks/` — Custom React hooks
-   `public/` — Static assets (images, icons, videos)

## Customization

-   **Branding**: Update images and logos in `public/`.
-   **Content**: Edit text and sections in `src/app/` and `src/components/sections/`.
-   **Styling**: Modify Tailwind config in `tailwind.config.ts`.
