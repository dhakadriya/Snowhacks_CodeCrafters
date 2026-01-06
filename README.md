# AdWise - Marketing Analytics Platform

A comprehensive marketing analytics platform for businesses and startups to track ROI, analyze channel performance, and optimize marketing spend.

## Features

### 1. Landing Page
- Hero section with compelling headline
- Features showcase
- About section
- Professional SaaS design

### 2. Authentication
- User registration with validation
- Secure login system
- Session management
- Password protection

### 3. Onboarding
- Business information collection
- Marketing channel selection
- Budget input in Indian Rupees (₹)
- Progress indicator

### 4. Interactive Dashboard
- **Dynamic Time Range Selection**: 7, 30, or 90 days
- **Animated KPI Cards**: 
  - Total Marketing Spend
  - Total Revenue
  - ROI Percentage
  - Total Conversions
- **Performance Chart**: Line chart showing Revenue vs Spend over time
- **Channel Performance Chart**: Bar chart comparing ROI across channels
- **Platform Tracking**: Display selected marketing channels with status

### 5. Recommendations Page
- AI-powered marketing insights
- Channel suitability analysis
- Budget reallocation suggestions
- Actionable recommendations

### 6. Channels Page
- Detailed channel comparison table
- ROI trends visualization
- Performance metrics

### 7. Settings Page
- Account management
- Business information updates
- Channel preferences

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Charts**: Chart.js 4.4.0
- **Fonts**: Inter (Google Fonts)
- **Currency**: Indian Rupees (₹)

## Key Features

### Dynamic Data Management
- Realistic dummy data for 7, 30, and 90-day periods
- Automatic data scaling based on time range
- ROI calculation: `(Revenue - Spend) / Spend * 100`

### Premium UI/UX
- Modern SaaS-style design
- Smooth animations and transitions
- Count-up effect for numbers
- Loading states
- Hover effects
- Responsive design

### Interactive Charts
- Smooth transition animations
- Tooltips with formatted values
- Legend and labels
- Color-coded channels
- Auto-update on time range change

## Color Palette

- **Primary**: Indigo (#6366F1)
- **Success**: Green (#10B981)
- **Warning**: Amber (#F59E0B)
- **Danger**: Red (#EF4444)
- **Background**: Light Gray (#F8FAFC)
- **Text**: Slate (#0F172A)

## File Structure

```
├── index.html              # Landing page
├── login.html              # Login page
├── register.html           # Registration page
├── onboarding.html         # Onboarding flow
├── dashboard.html          # Main dashboard
├── channels.html           # Channel analysis
├── recommendations.html    # AI recommendations
├── settings.html           # User settings
├── styles/
│   ├── main.css           # Global styles
│   ├── landing.css        # Landing page styles
│   ├── auth.css           # Authentication styles
│   ├── dashboard.css      # Dashboard styles (premium)
│   ├── channels.css       # Channels page styles
│   ├── recommendations.css # Recommendations styles
│   ├── onboarding.css     # Onboarding styles
│   └── settings.css       # Settings styles
└── scripts/
    └── dashboard.js       # Dashboard logic & Chart.js integration
```

## Usage

1. Open `index.html` in a web browser
2. Click "Get Started" or "Login"
3. Register a new account
4. Complete onboarding (business info, channels, budget)
5. Access the interactive dashboard
6. Switch between 7, 30, and 90-day views
7. Explore channels and recommendations

## Dashboard Features

### Time Range Selector
- Segmented button control
- Active state highlighting
- Smooth data transitions

### KPI Cards
- Icon-based visual indicators
- Large, readable numbers
- Percentage change indicators
- Hover lift animation

### Charts
- **Performance Chart**: Dual-line chart (Revenue & Spend)
- **Channel Chart**: Horizontal bar chart (ROI by channel)
- Smooth animations on data update
- Formatted tooltips with ₹ symbol
- Responsive canvas sizing

### Data Logic
- Data scales logically: 7 days < 30 days < 90 days
- Realistic conversion rates
- Proper ROI calculations
- Consistent growth patterns

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Demo Data

The platform includes realistic dummy data for:
- 6 marketing channels (Google Ads, Facebook, Instagram, Email, WhatsApp, LinkedIn)
- 3 time ranges (7, 30, 90 days)
- Revenue, spend, conversions, and ROI metrics

## Future Enhancements

- Real API integration
- Export reports (PDF/CSV)
- Email notifications
- Team collaboration
- Advanced analytics
- A/B testing insights

## License

© 2024 AdWise. All rights reserved.
