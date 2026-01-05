# Deployment Guide

This document explains how to publish your portfolio website on GitHub Pages.

## Prerequisites

- Your repository is hosted on GitHub
- You have push access to the repository

## Setup GitHub Pages (One-time Setup)

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Obelisk999/abdoulrazakportfolio`
   (or navigate to your repository URL)
2. Click on **Settings** (top navigation)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under **Build and deployment**:
   - Source: Select **"GitHub Actions"**
   - Save the changes

### Step 2: Verify Workflow Permissions

1. In your repository settings, go to **Actions** > **General** (in the left sidebar)
2. Scroll down to **Workflow permissions**
3. Ensure **"Read and write permissions"** is selected
4. Check the box for **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

## Deploying Your Site

### Automatic Deployment (Recommended)

Once you merge this PR to the `main` branch, your site will automatically deploy!

1. Merge this pull request to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages
3. Wait 2-3 minutes for the deployment to complete
4. Visit your live site at: **https://obelisk999.github.io/abdoulrazakportfolio/**

### Manual Deployment

You can also trigger a deployment manually:

1. Go to the **Actions** tab in your repository
2. Select **"Deploy to GitHub Pages"** workflow from the left sidebar
3. Click **"Run workflow"** button (on the right)
4. Select the `main` branch
5. Click **"Run workflow"**

## Monitoring Deployment

To check the status of your deployment:

1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. You'll see two jobs:
   - **build**: Compiles your React app
   - **deploy**: Publishes to GitHub Pages
4. If there are any errors, they'll be displayed here

## Troubleshooting

### Deployment Fails

- Check the Actions tab for error messages
- Ensure all tests pass locally: `npm run build`
- Verify Node.js version compatibility (v20 is used in workflow)

### Site Shows 404 Error

- Wait a few minutes after first deployment
- Check that GitHub Pages is enabled in Settings
- Verify the workflow completed successfully in Actions tab

### Site Doesn't Update

- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Wait 2-3 minutes for CDN to update
- Check that the workflow ran on the main branch

### Changes Not Visible

- Ensure you pushed to the `main` branch, not a different branch
- Check the Actions tab to verify the workflow completed
- The base URL is set to `/abdoulrazakportfolio/` - make sure this matches your repository name

## Updating Your Site

To update your published site:

1. Make changes to your code locally
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. The workflow will automatically run and deploy your changes
4. Visit your site after 2-3 minutes to see updates

## Custom Domain (Optional)

To use a custom domain:

1. Go to repository **Settings** > **Pages**
2. Under **Custom domain**, enter your domain
3. Add DNS records as instructed by GitHub
4. Update `base` in `vite.config.ts` to `"/"` instead of `"/abdoulrazakportfolio/"`

## Local Preview

To preview your site locally before deploying:

```bash
npm install
npm run build
npm run preview
```

Then visit `http://localhost:4173` in your browser.

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
