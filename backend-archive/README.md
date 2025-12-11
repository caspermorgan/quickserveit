# Backend Archive

This directory contains the archived backend code that was removed during the static site conversion.

## Files Moved Here:

- `/server/` - Express.js server implementation
  - `index.ts` - Main server entry point
  - `routes.ts` - API route definitions
  - `storage.ts` - Database layer (MemStorage)
  - `static.ts` - Static file serving
  - `vite.ts` - Vite dev server setup

## Why This Was Removed:

The project was converted to a **pure static frontend** that can be hosted on Vercel for free. This conversion:

✅ Eliminates server dependency  
✅ Reduces deployment complexity  
✅ Enables free Vercel hosting  
✅ Maintains all frontend functionality  

## Removed Dependencies:

**Backend Only:**
- `express` - Web server framework
- `pg` - PostgreSQL client
- `drizzle-orm` - ORM
- `drizzle-kit` - Database migrations
- `passport` - Authentication
- `express-session` - Session management
- `connect-pg-simple` - Session store
- `memorystore` - In-memory session store
- `ws` - WebSocket support

**Type Definitions for Backend:**
- `@types/express`
- `@types/express-session`
- `@types/passport`
- `@types/passport-local`
- `@types/ws`
- `@types/node`
- `@types/connect-pg-simple`

## Removed Build Scripts:

```json
{
  "dev": "NODE_ENV=development tsx server/index.ts",
  "start": "NODE_ENV=production node dist/index.cjs",
  "db:push": "drizzle-kit push"
}
```

Replaced with:
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## Removed Configuration Files:

- `drizzle.config.ts` - Database migration config
- `script/build.ts` - Custom Node.js build script

## Features Replaced:

1. **API Routes** → WhatsApp redirect (for contact/messaging)
2. **Database Queries** → Static JSON files in `/public/data/`
3. **User Authentication** → Static pages (no login)
4. **Session Management** → Browser localStorage (if needed)

## For Future Backend Integration:

If you later want to add a backend:

1. Restore files from this archive
2. Update `package.json` with backend dependencies
3. Implement API calls in the frontend
4. Deploy backend separately (Railway, Render, etc.)
5. Update `vercel.json` to proxy API calls

## Reference:

See `STATIC_MIGRATION.md` in the root for complete migration details.
