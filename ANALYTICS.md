# Vercel Web Analytics Integration

This document provides details about the Vercel Web Analytics integration in ScenioxChat.

## Implementation

The Vercel Web Analytics package (`@vercel/analytics`) has been integrated following the official Next.js App Router pattern.

### Installation

The package is installed as a dependency:

```json
{
  "dependencies": {
    "@vercel/analytics": "^1.4.0"
  }
}
```

### Integration in Root Layout

The `Analytics` component is imported and placed in the root layout (`app/layout.tsx`):

```tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Features

### Automatic Tracking

The Analytics component automatically tracks:

- **Page Views**: Every page navigation is tracked
- **Route Changes**: Client-side route transitions are detected
- **Performance Metrics**: Web Vitals and page load times
- **Visitor Data**: Anonymous visitor information

### Privacy-First

Vercel Web Analytics is privacy-friendly:

- No cookies used
- No personal data collected
- GDPR and CCPA compliant
- Anonymous visitor tracking only

## Enabling Analytics in Vercel

After deployment, follow these steps:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (ScenioxChat)
3. Click on the **Analytics** tab
4. Click the **Enable** button
5. Deploy your app (the analytics routes will be added automatically)

> **Note:** Analytics routes are scoped at `/_vercel/insights/*` and are added automatically after enabling.

## Verifying the Integration

After deployment, verify the integration is working:

1. Open your deployed site
2. Open browser DevTools (F12)
3. Go to the **Network** tab
4. Navigate through pages
5. Look for requests to `/_vercel/insights/view`

If you see these requests, the integration is working correctly!

## Viewing Analytics Data

Access your analytics data:

1. Visit your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. View metrics including:
   - Visitors over time
   - Page views
   - Top pages
   - Traffic sources
   - Devices and browsers
   - Geographic data

## Custom Events (Pro/Enterprise)

For users on Pro or Enterprise plans, you can track custom events:

```tsx
import { track } from '@vercel/analytics'

// Track a custom event
track('button_click', { location: 'header' })
```

## Filtering Data

You can filter analytics data by:

- Date range
- Page URL
- Traffic source
- Device type
- Browser
- Country/Region

## Best Practices

1. **Enable Early**: Enable analytics as soon as you deploy to start collecting data
2. **Monitor Regularly**: Check your analytics weekly to understand user behavior
3. **Use Filters**: Leverage filtering to gain specific insights
4. **Track Key Events**: Use custom events for important user actions (Pro/Enterprise)
5. **Privacy**: Ensure compliance with your local privacy regulations

## Troubleshooting

### Analytics Not Working?

1. **Check if enabled**: Ensure analytics is enabled in your Vercel dashboard
2. **Verify deployment**: Make sure you've deployed after enabling analytics
3. **Check Network tab**: Look for `/_vercel/insights/view` requests
4. **Wait for data**: It may take a few minutes for data to appear in the dashboard

### No Data Showing?

- Give it time: Analytics data may take a few hours to appear initially
- Check filters: Ensure you haven't filtered out all data
- Verify visitors: Make sure your site has had actual visitors

## Additional Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Analytics Package](https://vercel.com/docs/analytics/package)
- [Custom Events Guide](https://vercel.com/docs/analytics/custom-events)
- [Privacy Policy](https://vercel.com/docs/analytics/privacy-policy)
- [Pricing Information](https://vercel.com/docs/analytics/limits-and-pricing)

## Support

For issues or questions:

- Check the [Troubleshooting Guide](https://vercel.com/docs/analytics/troubleshooting)
- Visit [Vercel Support](https://vercel.com/support)
- Open an issue in the repository
