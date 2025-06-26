# Vemula Mounika - Portfolio Website(Blockly.co.in)

A modern, responsive portfolio website showcasing my journey as a Full Stack Developer Trainee.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with persistence
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Project Showcase**: Featured projects with live demos and GitHub links
- **Skills Display**: Comprehensive overview of technical skills
- **Contact Form**: Easy way to get in touch

## 🚀 Tech Stack

- **Frontend**: React.js, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for deployment on Vercel

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal background and journey
3. **Skills**: Technical expertise and tools
4. **Projects**: Featured work with live demos
5. **Contact**: Get in touch form and social links

## 🛠️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/mounika-2510/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   └── SocialSidebar.tsx # Social media links
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Teal to Cyan gradient
- **Secondary**: Orange for CTAs
- **Neutral**: Gray scale for backgrounds and text
- **Accent**: Yellow for highlights

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable text with proper line spacing
- **Sizes**: Responsive typography scales

### Components
- **Cards**: Subtle shadows with hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Forms**: Clean inputs with focus states

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Personal Information
Update personal details in the respective components:
- `Hero.tsx`: Name, title, and description
- `About.tsx`: Personal story and background
- `Skills.tsx`: Technical skills and expertise
- `Projects.tsx`: Featured projects and demos
- `Contact.tsx`: Contact information and social links

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update component styles in individual `.tsx` files
- Global styles in `index.css`

## 📊 Featured Projects

### 1. Match Game
- **Description**: Memory game with time-based gameplay
- **Tech Stack**: React.js, CSS, JavaScript
- **Features**: Timer, score tracking, responsive design
- **Live Demo**: [mgvm.ccbp.tech](https://mgvm.ccbp.tech)

### 2. My Tasks
- **Description**: Task management application
- **Tech Stack**: React.js, CSS, Local Storage
- **Features**: Add/delete tasks, categorization, persistence
- **Live Demo**: [mytaskvm.ccbp.tech](https://mytaskvm.ccbp.tech)


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

*Built with ❤️ using React.js and Tailwind CSS*