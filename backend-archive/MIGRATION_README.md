# Backend Archive

## Purpose
This folder contains the original backend code that was moved during the static frontend migration. The `main` branch now contains only frontend code suitable for static hosting on Vercel.

## Contents
- `server/` - Express.js backend application
- `shared/` - Shared utilities and types
- `script/` - Build and utility scripts  
- Original backend configuration files

## When to Use
Refer to this folder if you need to:
- Review the original backend implementation
- Restore backend functionality
- Run the full-stack application locally

## Migration Details
- **Snapshot Branch**: `backend-archive-snapshot-20251211-2200` contains the full repository state before migration
- **Working Branch**: `static-conversion/comet-20251211-2200` contains the conversion changes
- **Date**: December 11, 2025
- **Reason**: Converting to static frontend for Vercel deployment (free tier)

## Frontend Location
The frontend code that remains in `main` branch is located in `/client` folder and contains:
- React + Vite application
- Static pages and components
- Contact forms with WhatsApp integration
- No backend dependencies

## To Restore Backend
1. Check out `backend-archive-snapshot-20251211-2200` branch
2. Or review server/ folder contents here for reference implementation

---
Do NOT restore backend files to `main` branch unless rebuilding full-stack application.
For frontend-only static hosting, use `main` branch as-is.
