# JobSea — Next.js + Tailwind (Static Export) + Firebase Hosting

## Run locally
```bash
npm install
npm run dev
```

## Build static export (generates `out/`)
```bash
npm run build
```

## Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # choose 'Use existing' and ONLY 'Hosting', set public dir to 'out'
firebase deploy --only hosting
```
