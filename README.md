# EL ASASS Heavy Equipment | الأساس للمعدات الثقيلة

Premium multilingual corporate website for EL ASASS Heavy Equipment.

## Stack
- React + Vite
- React Router DOM
- Lucide React icons
- CSS-in-JS (scoped styles per component)

## Languages
- Arabic (RTL) — primary
- English (LTR) — secondary (toggle button in navbar)

## Setup

```bash
npm install
npm run dev
```

## Contact Form Setup (Formspree)

1. Go to https://formspree.io and create a free account
2. Create a new form
3. Copy your form ID (e.g. `xpwzgkja`)
4. In `src/pages/ContactPage.jsx`, replace `YOUR_FORM_ID` with your actual form ID:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```

## GitHub Pages Deployment

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` branch — the site deploys automatically

## Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Company info**: Update contact details in `src/components/Footer.jsx` and `src/pages/ContactPage.jsx`
- **WhatsApp number**: Search for `218910000000` and replace with your number
- **Content**: Edit `src/data/translations.js` for all Arabic/English text
- **Images**: Replace Unsplash URLs with your own photos

## Build

```bash
npm run build
# Output is in /dist — ready for any static host
```
