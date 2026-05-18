# Élégance - Luxury Fashion Designer Website

A luxury fashion designer website built with React, Tailwind CSS, and Supabase, featuring elegant design, appointment booking system, and admin dashboard.

## 🌟 Features

### Customer Features
- **Elegant Homepage**: Beautiful hero section with smooth animations
- **Dress Gallery**: Browse collections with category filtering
- **Appointment Booking**: Schedule consultations with custom date/time selection
- **Responsive Design**: Fully mobile-optimized interface

### Admin Features
- **Admin Dashboard**: Manage dresses and bookings
- **Dress Management**: Add, edit, and delete dress listings
- **Image Upload**: Upload dress images to Supabase Storage
- **Booking Management**: View and manage customer appointments
- **Calendar Integration**: Schedule and track appointments
- **Authentication**: Secure admin login with Supabase Auth

## 🎨 Design Highlights

- **Luxury Typography**: Playfair Display for headings, Poppins for body text
- **Gold Accents**: #d4af37 gold color scheme for premium feel
- **Smooth Animations**: Elegant transitions and micro-interactions
- **Premium Spacing**: Generous whitespace for luxury aesthetics
- **High-Quality Layout**: Bespoke grid system for perfect alignment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (optional for demo mode)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rzhaku7/week3.git
cd week3
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (optional - for Supabase):
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer section
│   ├── Hero.jsx        # Hero section
│   ├── DressCard.jsx   # Dress card component
│   └── ProtectedRoute.jsx # Auth protection
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Gallery.jsx     # Dress gallery
│   ├── Book.jsx        # Booking page
│   ├── Login.jsx       # Admin login
│   └── AdminDashboard.jsx # Admin panel
├── context/            # React context
│   └── AuthContext.jsx # Authentication context
├── config/             # Configuration
│   └── supabase.js     # Supabase setup
├── App.jsx             # Main app component
├── index.css           # Global styles with Tailwind
└── main.jsx            # Entry point
```

## 🔧 Technology Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Icons**: Lucide React
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Data Fetching**: TanStack React Query

## 📱 Pages

### Home Page (`/`)
- Hero section with call-to-action
- Featured dress collections
- Why choose us section
- Testimonials area

### Gallery (`/gallery`)
- Browse all dress collections
- Category filtering
- Responsive grid layout
- Dress card details

### Book Appointment (`/book`)
- Personal information form
- Date and time selection
- Service type selection
- Additional notes
- Confirmation message

### Admin Login (`/login`)
- Secure login interface
- Demo mode available
- Beautiful login form

### Admin Dashboard (`/admin`)
- Protected route requiring authentication
- Manage dress collections
- View and manage bookings
- Add new dresses with images
- Edit and delete listings

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

### Performance
- Optimized bundle size
- Fast build with Vite
- Lazy loading support

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support

### Security
- Protected admin routes
- Supabase authentication
- Environment variable protection

## 🌐 Environment Variables

Create a `.env.local` file with:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Demo Mode**: If environment variables are not set, the app works in demo mode with mock data.

## 📚 Database Schema (Supabase)

### Tables to Create:

**dresses**
```sql
- id (UUID, primary key)
- name (text)
- category (text)
- price (numeric)
- description (text)
- designer (text)
- image_url (text)
- created_at (timestamp)
- updated_at (timestamp)
```

**bookings**
```sql
- id (UUID, primary key)
- customer_name (text)
- customer_email (text)
- customer_phone (text)
- appointment_date (date)
- appointment_time (time)
- service_type (text)
- message (text)
- status (text)
- created_at (timestamp)
```

## 🎨 Color Palette

- **Black**: #000000 (primary text)
- **White**: #FFFFFF (background)
- **Gold**: #d4af37 (accent)
- **Gray**: #6B7280 (secondary text)
- **Light Gray**: #F3F4F6 (backgrounds)

## 📖 Component Usage

### DressCard Component
```jsx
<DressCard 
  dress={dressData} 
  onLike={(id, liked) => console.log(id, liked)}
  onSelect={(dress) => console.log(dress)}
/>
```

### ProtectedRoute Component
```jsx
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
```

## 🔐 Authentication Flow

1. User navigates to `/login`
2. Enters email and password
3. System authenticates with Supabase
4. On success, user redirected to `/admin`
5. Session persists using Supabase Auth
6. Protected routes check for active session

## 🧪 Testing

To test the admin features:
1. Click "Admin" button in header or navigate to `/login`
2. Click "Enter Demo Mode" to access without credentials
3. View dashboard features and mock data

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder
```

## 📝 Notes for Development

- Tailwind CSS v4 uses new `@import "tailwindcss"` syntax
- Custom colors defined in `tailwind.config.js`
- Animations defined as Tailwind keyframes
- Use `.env.local` for local development
- Demo mode works without Supabase configuration

## 🎓 Learning Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue on GitHub or contact hello@elegance.com.

---

**Made with ❤️ for luxury fashion**
