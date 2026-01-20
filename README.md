# Abdoulrazak Portfolio

A modern, responsive portfolio website showcasing my work and skills as a web developer.

## 🌐 Live Demo

Visit the live site: [https://obelisk999.github.io/abdoulrazakportfolio/](https://obelisk999.github.io/abdoulrazakportfolio/)

## 🚀 Technologies Used

This portfolio is built with modern web technologies:

- **React** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Animation library for smooth interactions

## 📦 Installation

To run this project locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/Obelisk999/abdoulrazakportfolio.git

# Navigate to the project directory
cd abdoulrazakportfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🚢 Deployment

This project supports deployment to both **Vercel** and **GitHub Pages**.

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Obelisk999/abdoulrazakportfolio)

**Quick Deploy:**
1. Click the "Deploy with Vercel" button above, or
2. Go to [vercel.com](https://vercel.com) and import your GitHub repository
3. Vercel will automatically detect the configuration and deploy your site

📖 **Detailed Guide:** See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for complete instructions

### Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages.

**Automatic Deployment:**
1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys the site
3. Site is available at: `https://obelisk999.github.io/abdoulrazakportfolio/`

**Manual Deployment:**
1. Go to the "Actions" tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

📖 **Detailed Guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions

### Why Two Deployment Options?

Both deployments work simultaneously with the same codebase:
- **Vercel**: Faster deploys, preview deployments, built-in analytics
- **GitHub Pages**: Free hosting on GitHub infrastructure

The application automatically detects the deployment platform and adjusts accordingly.

## 📝 Development

The project structure is organized as follows:

- `/src/components` - Reusable React components
- `/src/pages` - Page components
- `/src/assets` - Images and static files
- `/src/hooks` - Custom React hooks
- `/src/translations` - Multi-language support

## ✨ Features

- Fully responsive design
- Modern UI with smooth animations
- Multi-language support (English/French)
- Dark/Light theme support
- **Working contact form** with email notifications (powered by Resend)
- Project showcase
- Downloadable CV

## 📧 Contact Form Setup

The contact form sends real emails to your Gmail account. To configure:

1. See **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** for detailed setup instructions
2. Sign up for a free Resend account
3. Add your `RESEND_API_KEY` to Vercel environment variables
4. Redeploy your site

The free tier includes 3,000 emails/month - perfect for a portfolio!

## 📧 Contact

Feel free to reach out:

- Email: abdoulrazak.work@gmail.com
- LinkedIn: [Abdourazak Houssein](https://www.linkedin.com/in/abdourazak-houssein-a91b67291/)
- GitHub: [Obelisk999](https://github.com/Obelisk999)

## 📄 License

This project is open source and available for personal use.
