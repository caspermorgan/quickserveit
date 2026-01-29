@echo off
echo ========================================
echo Starting QuickServeIT Dev Server
echo ========================================
echo.

cd /d "%~dp0"

echo Stopping any existing Node processes...
taskkill /F /IM node.exe /T 2>nul

echo.
echo Starting Vite dev server...
echo.

npm run dev

pause
