# AI Cars Marketplace

A modern car marketplace built with Next.js, Prisma, PostgreSQL, and Bun.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Package Manager**: Bun
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: TailwindCSS
- **File Upload**: UploadThing
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Lucide React icons

## 📋 Prerequisites

- Node.js 18+ or Bun installed
- PostgreSQL database (local or cloud)

## 🛠️ Installation & Setup

### 1. Install Dependencies
```bash
bun install
```

### 2. Database Setup

#### Option A: Use Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database called `ai_cars_marketplace`
3. Update `.env` file:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/ai_cars_marketplace"
```

#### Option B: Use Prisma Dev Database (Current Setup)
```bash
bun x prisma dev
```

#### Option C: Use Cloud Database
- Use services like Vercel Postgres, Supabase, or PlanetScale
- Update `DATABASE_URL` in `.env`

### 3. Environment Variables
Copy `.env.example` to `.env` and fill in the required values:

```env
# Database
DATABASE_URL="your_database_url_here"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Upload (Optional)
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

### 4. Database Migration
```bash
# Generate Prisma client
bun run db:generate

# Push schema to database
bun run db:push

# Or run migrations (for production)
bun run db:migrate
```

### 5. Run Development Server
```bash
bun dev
```

## 🗄️ Database Schema

The project includes models for:
- **Users**: Authentication and user management
- **Cars**: Car listings with details like brand, model, price, etc.
- **Favorites**: User favorites system
- **Reviews**: Car reviews and ratings

## 📝 Available Scripts

```bash
# Development
bun dev                 # Start development server
bun build              # Build for production
bun start              # Start production server

# Database
bun run db:generate    # Generate Prisma client
bun run db:push        # Push schema to database
bun run db:migrate     # Run database migrations
bun run db:studio      # Open Prisma Studio
bun run db:reset       # Reset database

# Linting
bun lint               # Run ESLint
```

## 🔧 Bun as Package Manager

This project uses Bun instead of npm/yarn for faster package management:

```bash
# Install packages
bun add package-name

# Install dev dependencies
bun add -d package-name

# Remove packages
bun remove package-name

# Run scripts
bun run script-name
```

## 📊 Key Features

- **Car Listings**: Browse and search cars with filters
- **User Authentication**: Secure login/register system
- **Favorites**: Save favorite car listings
- **Reviews**: Rate and review cars
- **Image Upload**: Upload multiple car images
- **Admin Panel**: Manage listings and users
- **Responsive Design**: Mobile-first approach

## 🚀 Deployment

The app can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- DigitalOcean App Platform

Make sure to:
1. Set up environment variables
2. Configure database connection
3. Run database migrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
