@echo off
echo ========================================
echo Installing Phase 3 Dependencies
echo ========================================
echo.

cd /d "%~dp0"

echo Installing @dnd-kit/core and @dnd-kit/sortable...
echo.

npm install @dnd-kit/core @dnd-kit/sortable

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo SUCCESS! Dependencies installed.
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Run: npm run dev
    echo 2. Visit: http://localhost:5173/card-demo
    echo.
) else (
    echo ========================================
    echo ERROR! Installation failed.
    echo ========================================
    echo.
    echo Try running this in Command Prompt:
    echo npm install @dnd-kit/core @dnd-kit/sortable
    echo.
)

pause
