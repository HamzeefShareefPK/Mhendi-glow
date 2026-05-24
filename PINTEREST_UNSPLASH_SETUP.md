# Pinterest & Unsplash Integration Setup

## Overview
This guide explains how to set up Pinterest and Unsplash API integrations for your MehndiGlow gallery.

## Prerequisites
- Pinterest Business Account
- Unsplash Developer Account

## Step 1: Get Pinterest API Credentials

1. Go to [Pinterest Developers](https://developers.pinterest.com/)
2. Sign in with your Pinterest account
3. Create a new app if you haven't already
4. Get your **Access Token** and **Business Account ID**
5. Note: Pinterest API v1 is limited. For production, consider using Pinterest's Pinterest API v3 (requires approval)

## Step 2: Get Unsplash API Credentials

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Sign in or create an account
3. Create a new application
4. Get your **Access Key** from the application settings
5. Note: Free tier allows 50 requests/hour

## Step 3: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Add your credentials to `.env.local`:
```env
PINTEREST_ACCESS_TOKEN=your_token_here
PINTEREST_BUSINESS_ACCOUNT_ID=your_account_id_here
UNSPLASH_ACCESS_KEY=your_key_here
```

3. **Never commit `.env.local` to git!** It's already in `.gitignore`

## Step 4: Usage Examples

### In Components

#### Basic ExternalGallery Component
```tsx
import ExternalGallery from '@/components/gallery/ExternalGallery';

// Show all images from both sources
<ExternalGallery query="bridal mehndi" limit={12} />

// Show only Unsplash images
<ExternalGallery query="mehndi designs" onlyUnsplash />

// Show by category
<ExternalGallery category="bridal-mehndi-design" />
```

#### Using the useExternalImages Hook
```tsx
'use client';

import { useExternalImages } from '@/hooks/useExternalImages';

export default function MyComponent() {
  const { combined, unsplash, pinterest, loading, error } = useExternalImages({
    query: 'mehndi designs',
    limit: 12,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {combined.map((img) => (
        <img key={img.id} src={img.url} alt={img.title} />
      ))}
    </div>
  );
}
```

### Via API Endpoints

#### Fetch from Unsplash
```bash
GET /api/images/unsplash?query=mehndi&limit=12
GET /api/images/unsplash?category=bridal-mehndi-design&limit=20
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "photo_id",
      "url": "https://...",
      "title": "Image title",
      "description": "Image description",
      "photographer": "Name",
      "photographerUrl": "https://unsplash.com/@...",
      "likes": 123,
      "downloads": 456
    }
  ],
  "count": 12
}
```

#### Fetch from Pinterest
```bash
GET /api/images/pinterest?query=mehndi&limit=12
GET /api/images/pinterest?category=arabic-mehndi-design&limit=20
```

## Supported Categories

The system automatically maps your mehndi categories to relevant search queries:

- `bridal-mehndi-design` → "bridal mehndi designs"
- `arabic-mehndi-design` → "arabic mehndi patterns"
- `pakistani-mehndi-design` → "pakistani mehndi"
- `eid-mehndi-design` → "eid mehndi designs"
- `finger-mehndi-design` → "finger mehndi"
- `feet-mehndi-design` → "feet mehndi ankle"
- `minimal-mehndi-design` → "minimal simple mehndi"
- `indian-mehndi-design` → "indian mehndi designs"

## Caching

Both APIs implement 1-hour caching using Next.js `revalidate` option to:
- Reduce API quota usage
- Improve page load performance
- Stay within rate limits

## Rate Limits & Pricing

### Unsplash (Free Tier)
- **Requests/hour:** 50
- **Per app/day:** 50,000
- **No authentication required** for basic usage
- Perfect for production use

### Pinterest API v1
- **Tier-dependent** limits
- **Free tier:** Limited access
- Consider upgrading for production

## Integration Ideas

1. **Add to existing gallery:**
   ```tsx
   // In your category page
   <ExternalGallery category="bridal-mehndi-design" />
   ```

2. **Mix with local designs:**
   ```tsx
   <div className="space-y-8">
     <MasonryGallery designs={localDesigns} />
     <ExternalGallery category="bridal-mehndi-design" />
   </div>
   ```

3. **Create an inspiration section:**
   ```tsx
   <section>
     <h2>Trending Inspirations</h2>
     <ExternalGallery query="trending mehndi" limit={8} onlyUnsplash />
   </section>
   ```

## Troubleshooting

### "API credentials not configured"
- Check `.env.local` exists and has correct values
- Restart your dev server after changing `.env.local`
- Verify credentials in the respective platforms

### Empty results
- Check your API credentials are still valid
- Verify the search query/category is correct
- Check API quotas haven't been exceeded

### Images not loading
- Verify image URLs are accessible
- Check browser console for CORS errors
- Ensure image domains are allowed in `next.config.js`

## Next Steps

1. Set up `.env.local` with your credentials
2. Start your dev server: `npm run dev`
3. Add `<ExternalGallery />` component to your pages
4. Monitor API usage in your developer dashboards

## Resources

- [Pinterest Developers](https://developers.pinterest.com/)
- [Unsplash Developers](https://unsplash.com/developers)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
