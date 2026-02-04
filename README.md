# White Basket Laundry Website

## Project Overview
A modern, responsive website for White Basket Laundry featuring premium garment care services with pick-up and delivery options.

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Cross-browser compatible
- ✅ Modern animations and transitions
- ✅ WhatsApp deep linking (+27620192670)
- ✅ SEO optimized with editable metadata
- ✅ Google Analytics ready for visitor tracking
- ✅ Accessibility compliant
- ✅ Performance optimized

## File Structure
```
White Basket Laundry/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── Logo.pdf           # Original logo file (needs conversion)
├── logo.png           # Web-optimized logo (to be created)
├── favicon.ico        # Website icon (to be created)
└── README.md          # This file
```

## Setup Instructions

### 1. Logo Conversion
The logo is currently in PDF format. Convert it to web formats:
- Create `logo.png` (recommended: 200x60px, transparent background)
- Create `favicon.ico` (16x16px, 32x32px sizes)

### 2. Google Analytics Setup (Optional)

#### Step 1: Create Google Analytics Account
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring" or "Get started today"
3. Sign in with your Google account (or create one)
4. Click "Start measuring" button

#### Step 2: Set Up Your Property
1. **Account Name**: Enter "White Basket Laundry" (or your business name)
2. **Property Name**: Enter "White Basket Laundry Website"
3. **Reporting Time Zone**: Select your country/time zone
4. **Currency**: Select your local currency
5. Click "Next"

#### Step 3: Choose Platform
1. Select "Web" as your platform
2. Click "Next"

#### Step 4: Set Up Data Stream
1. **Website URL**: Enter your website URL (e.g., `https://whitebasketlaundry.com`)
2. **Stream Name**: Enter "White Basket Laundry Website"
3. Click "Create stream"

#### Step 5: Get Your Measurement ID
1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX` (copy this exactly)
3. Keep this page open for the next step

#### Step 6: Update Your Website
1. Open `index.html` in a text editor
2. Find this line: `gtag('config', 'GA_MEASUREMENT_ID');`
3. Replace `GA_MEASUREMENT_ID` with your actual ID:
   ```html
   gtag('config', 'G-XXXXXXXXXX');
   ```
4. Also replace it in this line:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```
   Should become:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
5. Save the file

#### Step 7: Test Your Setup
1. Upload your website to your web server
2. Visit your website in a browser
3. Go back to Google Analytics
4. Click "View real-time data" to see if your visit is tracked
5. You should see "1 user right now" if working correctly

#### What You'll Track
- **Unique visitors** per day/week/month
- **Page views** and time spent on site
- **WhatsApp button clicks** (automatically tracked)
- **Mobile vs desktop** usage
- **Geographic location** of visitors

#### Viewing Your Data
- **Real-time**: See current visitors
- **Reports > Engagement**: See page views and user behavior
- **Reports > Demographics**: See visitor locations
- **Reports > Events**: See WhatsApp clicks and other interactions

#### Cost
- **Google Analytics is 100% FREE** for small businesses
- No monthly fees or limits for basic tracking
- Perfect for tracking weekly unique visitors as requested

### 3. Domain Configuration
Update the Open Graph URL in `index.html`:
```html
<meta property="og:url" content="https://yourdomainname.com">
```

## Editing Metadata (No Developer Required)

### Basic SEO Information
Edit these meta tags in `index.html` between `<head>` and `</head>`:

```html
<!-- Page Title (appears in browser tab) -->
<title>Your New Title Here</title>

<!-- Description (appears in search results) -->
<meta name="description" content="Your new description here">

<!-- Keywords for search engines -->
<meta name="keywords" content="your, new, keywords, here">

<!-- Social Media Sharing -->
<meta property="og:title" content="Your Social Media Title">
<meta property="og:description" content="Description for social media">
```

### Company Information
Edit the company story in the "Our Story" section of `index.html`:
```html
<p class="story-text">
    Your new company story here...
</p>
```

### Contact Information
Update the WhatsApp number in `index.html`:
```html
<a href="https://wa.me/YOURNEWNUMBER" class="whatsapp-btn">
```

## Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features
- Optimized images and assets
- Minimal JavaScript for fast loading
- CSS animations with reduced motion support
- Lazy loading ready
- Service Worker ready for PWA features

## Accessibility Features
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast mode support
- Focus indicators
- Semantic HTML structure

## Mobile Responsiveness
- Mobile-first design approach
- Touch-friendly interactions
- Optimized for both portrait and landscape orientations
- Responsive typography and spacing
- Hamburger menu ready (if navigation is added later)

## Development Notes

### CSS Architecture
- CSS Custom Properties for easy theming
- Mobile-first responsive design
- Flexbox and CSS Grid for layouts
- Smooth animations with performance considerations

### JavaScript Features
- Intersection Observer for scroll animations
- Touch event optimization for mobile
- Analytics event tracking
- Error handling and graceful degradation

### Future Enhancements Ready
- Service Worker for offline functionality
- Progressive Web App (PWA) features
- Additional pages (Services, About, Contact)
- Contact form integration
- Image gallery for services

## Maintenance

### Regular Updates
1. Update meta descriptions seasonally
2. Monitor Google Analytics for visitor insights
3. Test on new browser versions
4. Update contact information as needed

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Test on various devices and connections

## Support
For technical issues or modifications beyond metadata editing, contact your web developer.

## License
© 2026 White Basket Laundry. All rights reserved.