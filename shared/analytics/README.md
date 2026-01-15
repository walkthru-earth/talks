# Analytics Integration for Slidev Presentations

This document provides instructions for setting up and using the analytics integration in Slidev presentations.

## Setup

### 1. Environment Variables

Create a `.env` file in the talks directory with the following variables:

```bash
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-CZBNSV0DW4

# PostHog Analytics
VITE_POSTHOG_KEY=your_posthog_key_here
VITE_POSTHOG_HOST=https://eu.i.posthog.com
```

**To get your PostHog key:**

- Copy it from `/Users/yharby/Documents/gh/walkthru-earth/website/walkthru-earth.github.io/.env.local`
- Look for the `NEXT_PUBLIC_POSTHOG_KEY` value

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Build with Analytics

The analytics files are automatically copied to each package during the build:

```bash
# Run the index generation script (also copies analytics files)
pnpm build:index

# Or build everything
pnpm packages:build-base
```

## How It Works

### Automated File Distribution

When you run `node scripts/generate-index.js` or any build command, the following files are automatically copied from `shared/analytics/` to each package:

- `global-top.vue` - Analytics initialization component
- `consent.ts` - Cookie consent utilities
- `env.d.ts` - TypeScript declarations

### Analytics Features

1. **Google Analytics 4 (GA4)**

   - Tracks slide views as page views
   - Includes slide number in tracking
   - Respects consent preferences
   - Anonymizes IP addresses

2. **PostHog**

   - Tracks slide navigation
   - Captures presentation name and slide number
   - Cookieless mode by default (until consent granted)
   - Switches to localStorage when user accepts

3. **Privacy-First**
   - Consent mode integration
   - Cookieless tracking by default
   - GDPR compliant
   - Respects user preferences from main website

## Testing

### Local Development

```bash
cd packages/walkthru-earth-template
pnpm dev
```

Then open your browser DevTools:

- **Network tab**: Look for requests to `google-analytics.com` and PostHog
- **Console**: Check for any initialization errors
- **Application tab**: Verify localStorage consent preferences

### Production Build

```bash
pnpm packages:build-base
npx serve dist
```

Navigate to your presentation and verify analytics tracking in:

- Google Analytics Real-Time reports
- PostHog Live Events

## Troubleshooting

### Analytics Not Loading

1. **Check environment variables are set:**

   ```bash
   cat .env
   ```

2. **Verify files were copied:**

   ```bash
   ls -la packages/walkthru-earth-template/*.{vue,ts}
   ```

3. **Check browser console for errors**

### Missing PostHog Key

If you see `VITE_POSTHOG_KEY is undefined`:

1. Copy the key from the Next.js website `.env.local`
2. Add it to `talks/.env`
3. Rebuild the package

## Adding Analytics to New Presentations

Analytics are **automatically added** to all packages! Simply:

1. Create a new package in `packages/`
2. Run `pnpm build:index` or `pnpm packages:build-base`
3. Analytics files will be automatically copied

No manual configuration needed per presentation!
