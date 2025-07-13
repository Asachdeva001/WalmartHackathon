# SmartMart - AI-Powered E-Commerce MVP

A revolutionary e-commerce platform featuring AI-powered shopping experiences, in-store camera detection, voice assistant, and accessibility features.

## 🚀 Features

### Core Features
- **AI-Powered Shopping**: Intelligent product recommendations and search
- **In-Store Experience**: Camera-based product detection and identification
- **Voice Assistant**: AI chatbot with voice interaction capabilities
- **Accessibility**: Read aloud functionality for enhanced accessibility
- **Dark Mode**: Full dark/light theme support
- **Mobile Responsive**: Optimized for all device sizes

### Pages & Flows
- **Home**: Landing page with feature showcase
- **Shop**: Product catalog with search, filters, and AI recommendations
- **In-Store**: Camera-based product detection (demo codes: 1234, 5678)
- **Cart**: Shopping cart with quantity management
- **Admin**: Product management and analytics dashboard

### AI Features
- **Voice Recognition**: Speech-to-text for hands-free interaction
- **Text-to-Speech**: Read aloud functionality for accessibility
- **Object Detection**: Camera-based product identification (simulated)
- **AI Assistant**: Chatbot with contextual responses

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Radix UI primitives
- **State Management**: React Context with useReducer
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **TypeScript**: Full type safety

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd walmarthackathon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Demo Walkthrough

### 1. Home Page
- View the landing page with feature highlights
- Try the "Start Shopping" and "Try In-Store" buttons

### 2. Shop Experience
- Browse products with search and filtering
- Add items to cart with quantity selection
- Experience AI-powered product recommendations

### 3. In-Store Experience
- Enter store code: `1234` or `5678`
- Activate camera for product detection
- View detected products and details
- Experience voice feedback with read aloud

### 4. AI Assistant
- Click the bot icon in the header
- Chat with the AI assistant
- Try voice input with the microphone button
- Toggle read aloud functionality

### 5. Cart Management
- View cart items and quantities
- Modify quantities or remove items
- See order summary with tax calculation

### 6. Admin Dashboard
- View product management interface
- Check analytics and settings
- Experience the admin workflow

## 🎨 Design System

### Components
- **Button**: Multiple variants (default, outline, ghost, etc.)
- **Card**: Product cards and content containers
- **Input**: Form inputs with proper styling
- **Switch**: Toggle components for settings
- **Header**: Navigation with AI assistant integration

### Accessibility Features
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility
- **Voice Control**: Speech recognition and synthesis
- **High Contrast**: Dark/light mode support
- **Focus Management**: Clear focus indicators

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for API keys (future implementation):
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### Customization
- **Colors**: Modify CSS variables in `app/globals.css`
- **Components**: Edit component files in `components/ui/`
- **Data**: Update sample data in `lib/data.ts`

## 📱 Mobile Experience

The application is fully responsive with:
- Touch-friendly interface
- Mobile-optimized navigation
- Camera integration for in-store experience
- Voice interaction for hands-free use

## 🎯 Hackathon Features

### MVP Priorities ✅
- [x] Flawless mobile/responsive UI/UX
- [x] Dark mode ready
- [x] Seamless user flow
- [x] Sample data for 5+ products
- [x] Demo AI object detection
- [x] Error handling and validation
- [x] Impressive visual elements

### AI Integration
- **Voice Assistant**: Chat interface with voice input/output
- **Object Detection**: Camera-based product identification
- **Read Aloud**: Accessibility feature for all content
- **Smart Recommendations**: AI-powered product suggestions

### Visual Elements
- **Animated AI Assistant**: Smooth transitions and interactions
- **Camera Overlay**: Product detection visualization
- **Dark Mode Switch**: Seamless theme switching
- **Modern Animations**: Framer Motion integration

## 🚀 Future Enhancements

### Planned Features
- **Real AI Integration**: Connect to actual Gemini API
- **Database**: Supabase integration for data persistence
- **Authentication**: User accounts and profiles
- **Payment Processing**: Stripe integration
- **Real-time Updates**: WebSocket connections
- **Advanced Analytics**: Detailed user behavior tracking

### Technical Improvements
- **Performance**: Image optimization and lazy loading
- **SEO**: Meta tags and structured data
- **PWA**: Progressive Web App features
- **Testing**: Unit and integration tests
- **CI/CD**: Automated deployment pipeline

## 📄 License

This project is created for hackathon demonstration purposes.

## 🤝 Contributing

This is a hackathon project. For production use, please implement proper security measures and error handling.

---

**Built with ❤️ for the Walmart Hackathon**
# WalmartHackathon
