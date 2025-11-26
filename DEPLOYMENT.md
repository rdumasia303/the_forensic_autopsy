# Build and Deployment Instructions

## Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

## Build Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This will create a `dist/` folder containing all the static files ready for deployment.

## Deployment Instructions

### What to Upload
After running `npm run build`, upload the **entire contents** of the `dist/` folder to your web hosting:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ... (other hashed files)
└── ... (any other generated files)
```

### Deployment Steps

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Upload to your web hosting:**
   - Connect to your web host via FTP, SFTP, or hosting control panel
   - Navigate to your public web directory (often called `public_html`, `www`, or `htdocs`)
   - Upload **all files and folders** from the `dist/` directory to your web root
   - Make sure `index.html` is in the root of your web directory

3. **Access your site:**
   - Visit your domain (e.g., `https://yourdomain.com`)
   - The app should load immediately

### Common Hosting Platforms

#### cPanel / Shared Hosting
- Use File Manager or FTP client (FileZilla)
- Upload `dist/` contents to `public_html/` folder

#### Netlify (Alternative - Free Hosting)
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

#### Vercel (Alternative - Free Hosting)
```bash
npm install -g vercel
vercel --prod
```

### Important Notes

- **Environment Variables**: This app references `GEMINI_API_KEY` in the Vite config, but it's only used during development. The production build should work without it.
- **SPA Routing**: If you add React Router in the future, configure your host to redirect all requests to `index.html`
- **HTTPS**: Most modern web hosts provide free SSL certificates - make sure HTTPS is enabled

### Troubleshooting

**Blank page after deployment:**
- Check browser console for errors
- Ensure all files from `dist/` were uploaded
- Verify `index.html` is in the correct directory

**404 errors for assets:**
- Ensure the `assets/` folder was uploaded
- Check if your hosting requires a specific base path in `vite.config.ts`

**Need to update the site:**
1. Make your changes locally
2. Run `npm run build` again
3. Re-upload the `dist/` contents (overwrite old files)

## Quick Reference

```bash
# Development
npm install          # Install dependencies
npm run dev         # Run locally at http://localhost:3000

# Production
npm run build       # Build for production (creates dist/ folder)
npm run preview     # Preview production build locally

# Deploy
# Upload everything from dist/ to your web host
```
