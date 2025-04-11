# Snipbit

A modern application for managing and sharing code snippets.

## Tech Stack

This project is built with a modern, full-stack TypeScript setup:

-   **Framework**: [Astro](https://astro.build/) for the frontend and server-side rendering.
-   **Backend & Database**: [Convex](https://www.convex.dev/) for the real-time backend and database.
-   **Authentication**: [Clerk](https://clerk.com/) for user management and authentication.
-   **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling and [Alpine.js](https://alpinejs.dev/) for client-side interactivity.
-   **Runtime**: [Bun](https://bun.sh/) as the JavaScript runtime.
-   **Tooling**:
    -   TypeScript for static typing.
    -   ESLint, Prettier, and Biome for code linting and formatting.

## Project Structure

The codebase is organized into the following key directories:

```
.
├── convex/         # Convex backend: schema, queries, mutations, and actions
├── public/         # Static assets (images, fonts, etc.)
└── src/
    ├── app/
    │   ├── api/    # API routes managed by astro-pages
    │   └── pages/  # UI pages/routes managed by astro-pages
    ├── components/ # Reusable Astro/UI components
    ├── features/   # Self-contained application features
    └── layouts/    # Astro layout components for page structure
```

## Development Setup

To get the project running locally, follow these steps:

### 1. Prerequisites

-   [Bun](https://bun.sh/docs/installation) installed.
-   [ngrok](https://ngrok.com/docs/getting-started/) account and CLI installed.
-   [Clerk](https://clerk.com/) account.
-   [Convex](https://www.convex.dev/) account.

### 2. Environment Variables

This project uses environment variables for configuration. You can manage them using a `.env.local` file or a secret manager like [Doppler](https://www.doppler.com/).

1.  Copy the `.env.example` file to `.env.local`:
    ```bash
    cp .env.example .env.local
    ```
2.  Fill in the required values in `.env.local`:
    -   `CONVEX_DEPLOYMENT`: Your Convex deployment URL.
    -   `PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key.
    -   `CLERK_SECRET_KEY`: Your Clerk secret key.
    -   `PUBLIC_SITE_URL`: Your static ngrok URL (e.g., `https://your-domain.ngrok-free.app`). This is crucial for Clerk authentication to work correctly.

### 3. Install Dependencies

Install the project dependencies using Bun:

```bash
bun install
```

## Running the Project

The development server can be started using one of the following scripts:

-   **Standard Dev Command**: This script concurrently starts the Convex dev server, the Astro dev server, and the ngrok tunnel.

    ```bash
    bun run dev
    ```

-   **Using Doppler**: If you are managing your secrets with Doppler, use this command:
    ```bash
    bun run dev:doppler
    ```

Once running, the application will be accessible at:
-   **Local URL**: `http://localhost:4321`
-   **Public URL**: Your ngrok domain (e.g., `https://your-domain.ngrok-free.app`)

> **Note**: Access the application using the local URL.

## Linting and Formatting

This project uses ESLint, Prettier, and Biome to maintain code quality. Use the following script to automatically fix all linting and formatting issues:

```bash
bun run lint:fix:all
