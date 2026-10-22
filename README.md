# VES INVASION — Netlify Static Portfolio

**Turning Ideas Into Digital Reality**

This is the static-hosting edition of the VES INVASION portfolio, adapted from the original starter ZIP for easy deployment to Netlify.

## Deploy from an Android phone

1. Extract this ZIP on your phone.
2. Create a new repository at https://github.com/new named `ves-invasion`.
3. Upload the **contents of the extracted folder** to the repository. The root of the repository must show `package.json`, `index.html`, `src/`, `public/` (if present), and `netlify.toml`. Do not upload the ZIP as the only file.
4. Open https://app.netlify.com/ and sign in.
5. Choose **Add new site → Import an existing project → GitHub**.
6. Authorize GitHub if asked, then select `ves-invasion`.
7. Netlify should read `netlify.toml`. Confirm build command is `npm run build` and publish directory is `dist`.
8. Click **Deploy site** and wait for the build to finish.

No Railway service, database, or environment variables are required for this static edition.

## Included features

- Existing cinematic intro with Skip button
- Responsive cyber-tech portfolio design
- About, Services, Projects, Dev Journal and Contact sections
- GitHub, email and WhatsApp links
- Contact form builds a message and opens WhatsApp; the visitor must press **Send** in WhatsApp

## Limitations of the static edition

- No Node.js API or database persistence
- No admin login/dashboard
- Project and journal content is edited in source files and redeployed
- WhatsApp does not send automatically; the user confirms the message in WhatsApp

The backend from the original starter is not included in this static-only package.
