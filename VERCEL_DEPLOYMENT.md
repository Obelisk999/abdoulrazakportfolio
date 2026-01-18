# Deploying to Vercel

This guide explains how to deploy your portfolio to Vercel.

## Prerequisites

- A Vercel account (free tier available at [vercel.com](https://vercel.com))
- Your repository on GitHub

## Quick Deploy (Recommended)

### Option 1: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `Obelisk999/abdoulrazakportfolio`
4. Vercel will automatically detect it's a Vite project
5. Click **"Deploy"**

That's it! Your site will be live in 1-2 minutes at a URL like: `https://abdoulrazakportfolio-xxx.vercel.app`

### Option 2: Using Vercel CLI

Install Vercel CLI:
```bash
npm install -g vercel
```

Deploy from your local repository:
```bash
cd /path/to/abdoulrazakportfolio
vercel
```

Follow the prompts, and your site will be deployed!

## Configuration

The repository is already configured for Vercel deployment:

- ✅ `vercel.json` - Configures URL rewriting for SPA routing
- ✅ Environment detection - Automatically uses correct base path
- ✅ `.vercelignore` - Excludes unnecessary files from deployment

## How It Works

The application automatically detects when it's running on Vercel:

- **On Vercel**: Uses base path `/` (root)
- **On GitHub Pages**: Uses base path `/abdoulrazakportfolio/`
- **Local Development**: Uses base path `/abdoulrazakportfolio/`

This is handled through the `VERCEL` environment variable that Vercel automatically sets.

## Custom Domain (Optional)

To use your own domain:

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (usually 5-30 minutes)

## Environment Variables

If you need to add environment variables:

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add your variables
4. Redeploy for changes to take effect

## Automatic Deployments

Vercel automatically deploys:

- **Production deployments**: When you push to `main` branch
- **Preview deployments**: When you create a pull request

Each deployment gets a unique URL for testing.

## Monitoring & Analytics

Access your deployment details:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. View:
   - Deployment history
   - Analytics
   - Performance metrics
   - Logs

## Troubleshooting

### Build Fails

Check the build logs in Vercel Dashboard:
- Most common issue: Missing dependencies
- Solution: Ensure `package.json` is up to date

### 404 Errors

- The `vercel.json` configuration handles SPA routing
- All routes redirect to `index.html` for client-side routing

### Changes Not Visible

- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check deployment status in Vercel Dashboard
- Ensure you're viewing the correct deployment URL

## Comparing with GitHub Pages

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| Deploy Speed | ~1 minute | ~2-5 minutes |
| Preview Deploys | ✅ Yes | ❌ No |
| Custom Domain | ✅ Free | ✅ Free |
| Analytics | ✅ Built-in | ❌ Need setup |
| Automatic SSL | ✅ Yes | ✅ Yes |
| Build Logs | ✅ Detailed | ⚠️ Basic |

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Switching Between Deployments

You can maintain both Vercel and GitHub Pages deployments simultaneously:

- **Vercel**: Live at `https://your-project.vercel.app`
- **GitHub Pages**: Live at `https://obelisk999.github.io/abdoulrazakportfolio/`

Both will work correctly with the current configuration!
