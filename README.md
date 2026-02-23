# ScenioxChat

Chat Brain Sceniox Agent - An AI-powered conversational assistant built with Next.js 14 and integrated with Vercel Web Analytics.

## Features

- ⚡ Built with Next.js 14 App Router
- 📊 Integrated Vercel Web Analytics for visitor tracking
- 🎨 Responsive design with modern CSS
- 🔒 TypeScript for type safety
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samimahamed01783/ScenioxChat.git
cd ScenioxChat
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Vercel Web Analytics

This project comes pre-configured with Vercel Web Analytics. The `Analytics` component from `@vercel/analytics/next` is integrated in the root layout (`app/layout.tsx`).

### How it works

- The Analytics component is placed at the end of the `<body>` tag in the root layout
- It automatically tracks page views and visitor metrics
- Route changes are automatically detected and tracked
- No additional configuration needed when deployed to Vercel

### Enabling Analytics

1. Deploy your project to Vercel
2. Go to your project dashboard on Vercel
3. Click on the **Analytics** tab
4. Click **Enable** to activate Web Analytics
5. After your next deployment, analytics data will start being collected

### Viewing Analytics Data

Once enabled and deployed:
- Visit your project dashboard on Vercel
- Click the **Analytics** tab to view:
  - Page views
  - Visitor metrics
  - Traffic sources
  - Device and browser data
  - And more...

## Project Structure

```
sceniox-chat/
├── app/
│   ├── layout.tsx       # Root layout with Analytics integration
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore file
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will detect Next.js and configure the build automatically
4. Your app will be deployed!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Platform](https://vercel.com)

## License

This project is open source and available under the [MIT License](LICENSE).
