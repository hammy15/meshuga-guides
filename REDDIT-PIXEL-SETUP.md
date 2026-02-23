# Reddit Pixel Setup Instructions

## What's Installed

✅ Reddit Pixel base code in `app/components/RedditPixel.tsx`  
✅ RedditPixel component added to `app/layout.tsx`  
✅ PageVisit event tracking on all guide pages (fires automatically on route changes)  
✅ Purchase event tracking on `/success` page

## How to Activate

Once you have your Reddit Pixel ID from ads.reddit.com:

### For Vercel Deployments

1. Go to Vercel project settings
2. Navigate to Environment Variables
3. Add: `NEXT_PUBLIC_REDDIT_PIXEL_ID` = `your-pixel-id-here`
4. Redeploy the site

### For Local Testing

1. Create/edit `.env.local` in the project root:
   ```
   NEXT_PUBLIC_REDDIT_PIXEL_ID=your-pixel-id-here
   ```
2. Restart the dev server

## Events Tracked

### PageVisit Event
- **Where:** Fires on all pages, automatically on route changes
- **Purpose:** Track when users land on guide pages
- **Implementation:** `app/components/RedditPixel.tsx` uses `useEffect` with `pathname` dependency

### Purchase Event
- **Where:** Fires on `/success` page after Stripe/Gumroad checkout
- **Purpose:** Track conversion when user completes purchase
- **Implementation:** `app/success/page.tsx` fires on page load

## Testing

### Verify Pixel is Loading

1. Open DevTools Console
2. Navigate to any guide page
3. Type: `window.rdt`
4. Should return a function (not undefined)

### Verify PageVisit Event

1. Open DevTools Network tab
2. Filter by "pixel"
3. Navigate to a guide page
4. Should see request to `redditstatic.com/ads/pixel.js` with event=PageVisit

### Verify Purchase Event

1. Complete a test purchase (or navigate directly to `/success?session_id=test`)
2. Open DevTools Network tab
3. Should see pixel request with event=Purchase

## Troubleshooting

**Pixel not loading:**
- Check that `NEXT_PUBLIC_REDDIT_PIXEL_ID` is set in Vercel environment variables
- Verify the pixel ID doesn't contain "YOUR_PIXEL_ID_HERE" (default placeholder)
- Redeploy after adding the environment variable

**Events not firing:**
- Open Console and check for JavaScript errors
- Verify `window.rdt` exists (type in Console)
- Check Network tab for blocked requests (ad blockers will block Reddit pixel)

**Purchase event not firing:**
- Verify user lands on `/success` page after checkout
- Check that redirect from Stripe/Gumroad includes `?session_id=xxx` parameter
- Test directly by visiting `/success?session_id=test`

## Current Status

🟡 **Reddit Pixel: Ready but inactive**  
The code is installed but won't activate until `NEXT_PUBLIC_REDDIT_PIXEL_ID` environment variable is set in Vercel.

Once Owen creates the Reddit Ads account and gets the pixel ID, just add it to Vercel env vars and redeploy.

## Sites Using This Pixel

All 7 guide sites share the same codebase, so the pixel will work across:
- techcliffnotes.com
- techtutorcafe.com
- appcliffnotes.com
- cliffnotetech.com
- easyappguides.com
- setupsherpa.com
- softwaremadeasy.com

To use different pixels per site, we'd need to add site-specific environment variables.
