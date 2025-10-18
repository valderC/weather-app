# Deployment instructions for GitHub Pages

1. The `gh-pages` package will be used to deploy the `public/` directory.
2. The `homepage` field in `package.json` will be set to your GitHub Pages URL.
3. Scripts will be added to automate deployment.

---

## Steps

1. Install the `gh-pages` package:
   ```sh
   npm install --save-dev gh-pages
   ```
2. Add the following to your `package.json`:
   - `homepage`: `https://valderC.github.io/weather-app/`
   - Scripts:
     ```json
     "predeploy": "echo 'Preparing deployment'",
     "deploy": "gh-pages -d public"
     ```
3. Run `npm run deploy` to publish your site.

---

## Note
- Your static site must be in the `public/` directory.
- Push all changes to GitHub before deploying.
- Make sure your repository is public and you have enabled GitHub Pages from the `gh-pages` branch in your repo settings.
