# Vercel Deployment Guide - QuickServeIT

## Project Architecture Analysis

**Current Setup:**
- Frontend: Vite + React (served from `/client`)
- Backend: Express.js (served from `/server`)
- Database: PostgreSQL + Drizzle ORM
- Build: Custom TypeScript build script
- Package Type: ES Module

---

## Phase 1: Local Development Setup

### Step 1.1: Environment Variables

Create `.env` file in root directory:

```env
# Database
DATABASE_URL=postgres://user:password@localhost:5432/quickserveit

# Node Environment
NODE_ENV=development
PORT=5000

# Session Secret (generate a random string)
SESSION_SECRET=your-random-secret-key-here

# Optional: Add other auth/config variables
```

### Step 1.2: Install Dependencies

```bash
npm install
```

### Step 1.3: Setup Local PostgreSQL Database

**Option A: Local PostgreSQL**
```bash
# macOS (using Homebrew)
brew install postgresql
brew services start postgresql

# Linux
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql

# Windows
# Download from: https://www.postgresql.org/download/windows/
```

**Option B: Docker (Recommended)**
```bash
docker run --name quickserveit-db \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=quickserveit \
  -p 5432:5432 \
  -d postgres:16
```

**Create database:**
```bash
# Using psql
psql -U postgres
CREATE DATABASE quickserveit;

# Connection string example:
# DATABASE_URL=postgres://postgres:password@localhost:5432/quickserveit
```

### Step 1.4: Run Database Migrations

```bash
npm run db:push
```

This uses Drizzle Kit to create tables from schema.

### Step 1.5: Run Development Server

```bash
npm run dev
```

Server starts on `http://localhost:5000`

---

## Phase 2: Build & Test

### Step 2.1: Verify Build Output

```bash
npm run build
```

**Expected output:**
```
✓ Client built successfully (dist/public/)
✓ Server built successfully (dist/index.cjs)
```

### Step 2.2: Test Production Build Locally

```bash
NODE_ENV=production node dist/index.cjs
```

Verify:
- [ ] Server starts on port 5000
- [ ] Frontend assets are served
- [ ] API endpoints are accessible

---

## Phase 3: Database Hosting Setup

### Option 1: Supabase (PostgreSQL) - RECOMMENDED

**Advantages:** Easy, free tier, manages backups

1. Go to: https://supabase.com
2. Create project
3. Wait for database setup (2-3 minutes)
4. Go to "Database" → "Connection Pooling"
5. Copy connection string:
   ```
   postgresql://[user]:[password]@[host]:[port]/[database]?sslmode=require
   ```

### Option 2: Railway

**Advantages:** Simple deploy, affordable

1. Go to: https://railway.app
2. Create new project
3. Add PostgreSQL plugin
4. Copy environment variables

### Option 3: Render

1. Go to: https://render.com
2. Create PostgreSQL database
3. Copy connection string

**Create `.env.production` with database URL:**
```env
DATABASE_URL=<your-cloud-postgres-url>
NODE_ENV=production
PORT=5000
SESSION_SECRET=<your-secure-random-key>
```

---

## Phase 4: Backend Deployment

### Option A: Railway (Recommended for this project)

#### 4A.1: Prepare Repository

Create `railway.toml` in root:

```toml
[build]
builder = "nixpacks"
buildCommand = "npm run build"
startCommand = "NODE_ENV=production node dist/index.cjs"

[deploy]
port = 5000
```

#### 4A.2: Deploy to Railway

1. Go to: https://railway.app
2. "New Project" → "Deploy from GitHub"
3. Select `quickserveit` repository
4. Add environment variables:
   - `DATABASE_URL` (from Supabase/Railway Postgres)
   - `NODE_ENV=production`
   - `SESSION_SECRET` (generate random string)
   - `PORT=5000`
5. Deploy

**Get backend URL:** railway.app assigns a public URL automatically

### Option B: Vercel (with serverless functions)

**Note:** Would require refactoring Express to Vercel functions.
Not recommended for complex backends.

### Option C: Render

1. Go to: https://render.com/new
2. Select "Web Service"
3. Connect GitHub
4. Configure:
   - Build: `npm run build`
   - Start: `NODE_ENV=production node dist/index.cjs`
5. Set environment variables
6. Deploy

---

## Phase 5: Frontend (Vercel) Deployment

### Step 5.1: Create `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "env": {
    "VITE_API_URL": "@backend-url"
  },
  "git": {
    "deploymentEnabled": {
      "main": true
    }
  }
}
```

### Step 5.2: Update Frontend API Calls

In `client/src`, update API base URL:

```typescript
// client/src/api/client.ts (or wherever you make API calls)
const API_BASE = process.env.VITE_API_URL || 'http://localhost:5000';

export const api = axios.create({
  baseURL: API_BASE,
});
```

### Step 5.3: Deploy to Vercel

1. Go to: https://vercel.com
2. "Add New" → "Project"
3. Import from GitHub → select `quickserveit`
4. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
5. Add Environment Variables:
   ```
   VITE_API_URL=https://your-railway-backend.railway.app
   ```
6. Deploy

---

## Phase 6: Environment Variables Checklist

### Vercel (Frontend)
```
VITE_API_URL=https://your-backend-url.railway.app
```

### Railway/Render (Backend)
```
DATABASE_URL=postgresql://...
NODE_ENV=production
SESSION_SECRET=<random-secure-key>
PORT=5000
```

### Supabase (Database)
Database connection string provided in dashboard

---

## Phase 7: Testing Deployment

### 7.1: Frontend Test
- [ ] Frontend loads on Vercel URL
- [ ] Assets load correctly
- [ ] No 404 errors

### 7.2: Backend Test
- [ ] Backend server starts
- [ ] API endpoints respond
- [ ] Database connections work
- [ ] Check logs for errors

### 7.3: Full Integration Test
- [ ] Frontend → Backend API calls work
- [ ] CORS headers configured properly
- [ ] Authentication flows work (if applicable)
- [ ] Database operations succeed

---

## Phase 8: Post-Deployment

### Update CORS (if needed)

In `server/index.ts`, add CORS middleware:

```typescript
import cors from 'cors';

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
```

### Setup Custom Domain

1. Vercel: Settings → Domains → Add custom domain
2. Update DNS records
3. Configure SSL certificate

### Monitoring & Logs

- **Vercel:** Dashboard → Deployments → Logs
- **Railway:** Dashboard → Logs
- **Supabase:** Database → Logs

---

## Troubleshooting

### "Build failed: dist/index.cjs not found"
- Verify `npm run build` works locally
- Check `script/build.ts` for errors
- Ensure all dependencies are in package.json

### "Database connection timeout"
- Verify DATABASE_URL is correct
- Check IP whitelist in Supabase/Railway
- Test connection locally first

### "CORS errors"
- Add backend URL to CORS whitelist
- Ensure credentials are passed in requests

### "PORT already in use"
- Change PORT environment variable
- Verify server isn't running twice

---

## Quick Deploy Checklist

- [ ] Local build works (`npm run build`)
- [ ] Database setup complete
- [ ] `.env.production` configured
- [ ] Backend deployed (Railway/Render)
- [ ] Frontend deployed (Vercel)
- [ ] Environment variables set in all services
- [ ] CORS configured
- [ ] API calls updated with backend URL
- [ ] Integration tests passed
- [ ] Custom domain setup (optional)
- [ ] Monitoring configured

---

## Support Files

- `package.json` - Dependencies and scripts
- `drizzle.config.ts` - Database migration config
- `vite.config.ts` - Frontend build config
- `server/index.ts` - Backend entry point
- `script/build.ts` - Build script logic

---

**Deployment Completed! 🚀**
