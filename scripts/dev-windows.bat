@echo off
echo Starting Next.js development server with optimized settings...

REM Set Node.js memory limit for Windows
set NODE_OPTIONS=--max-old-space-size=4096

REM Clear cache if requested
if "%1"=="--clear" (
    echo Clearing Next.js cache...
    if exist .next rmdir /s /q .next
    if exist node_modules\.cache rmdir /s /q node_modules\.cache
    echo Cache cleared!
)

REM Start the development server
echo Starting development server...
npx next dev

pause
