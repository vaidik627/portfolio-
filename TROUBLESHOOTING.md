# Troubleshooting Guide for Windows

## Quick Fix Commands

### 1. Clear Cache and Restart
```cmd
npm run cache:clear
npm run dev
```

### 2. Full Cleanup and Restart
```cmd
npm run clean
npm install
npm run dev
```

### 3. Use Windows-Optimized Script
```cmd
npm run dev:windows
```

### 4. Clear Cache and Start (Windows Script)
```cmd
npm run dev:clear
```

## Common Issues and Solutions

### Issue: "NODE_OPTIONS is not recognized"
**Solution**: Use the Windows batch file instead
```cmd
npm run dev:windows
```

### Issue: "Port 3000 is already in use"
**Solution**: Kill the process or use a different port
```cmd
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

### Issue: "Module not found" errors
**Solution**: Reinstall dependencies
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Issue: "Permission denied" errors
**Solution**: Run PowerShell as Administrator
1. Right-click on PowerShell
2. Select "Run as Administrator"
3. Navigate to your project directory
4. Run the commands

### Issue: Slow performance on Windows
**Solutions**:
1. **Use Windows batch file**:
   ```cmd
   npm run dev:windows
   ```

2. **Set Power Plan to High Performance**:
   - Open Control Panel
   - Power Options
   - Select "High Performance"

3. **Close unnecessary applications**:
   - Close browser tabs
   - Close other development tools
   - Disable antivirus scanning for project folder

4. **Clear cache regularly**:
   ```cmd
   npm run cache:clear
   ```

## Performance Optimization for Windows

### 1. Environment Variables (Manual Setup)
If you want to set memory limits manually:
```cmd
set NODE_OPTIONS=--max-old-space-size=4096
npm run dev
```

### 2. PowerShell Profile (Permanent Setup)
Add to your PowerShell profile:
```powershell
$env:NODE_OPTIONS = "--max-old-space-size=4096"
```

### 3. Windows Defender Exclusions
Add your project folder to Windows Defender exclusions:
1. Windows Security → Virus & threat protection
2. Manage settings → Add or remove exclusions
3. Add folder: `C:\Users\vaidi\Desktop\Website\PrakashTest\magic-portfolio`

## Development Commands

### Basic Commands
```cmd
npm run dev          # Standard development server
npm run dev:windows  # Windows-optimized development server
npm run dev:clear    # Clear cache and start
npm run build        # Production build
npm run start        # Production server
```

### Maintenance Commands
```cmd
npm run cache:clear  # Clear Next.js cache
npm run clean        # Full cleanup
npm run perf:check   # Performance analysis
```

### Troubleshooting Commands
```cmd
npm run lint         # Check for code issues
npm run build:analyze # Analyze bundle size
```

## File Structure Check

Ensure these files exist:
```
magic-portfolio/
├── package.json
├── next.config.mjs
├── src/
│   ├── app/
│   ├── components/
│   └── resources/
├── public/
└── scripts/
    └── dev-windows.bat
```

## Expected Behavior

### Successful Start
```
> @once-ui-system/magic-portfolio@2.2.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully in 2.5s
```

### Performance Indicators
- **Startup time**: 10-30 seconds
- **Hot reload**: 1-3 seconds
- **Memory usage**: 200-500MB
- **CPU usage**: 10-30%

## If Nothing Works

### Complete Reset
```cmd
# 1. Stop all Node processes
taskkill /f /im node.exe

# 2. Clear everything
rmdir /s /q .next
rmdir /s /q node_modules
del package-lock.json

# 3. Reinstall
npm install

# 4. Start fresh
npm run dev
```

### Alternative: Use VSCode Terminal
1. Open VSCode
2. Open integrated terminal (Ctrl + `)
3. Navigate to project directory
4. Run commands

### Alternative: Use Git Bash
1. Install Git for Windows
2. Use Git Bash terminal
3. Run Unix-style commands

## Contact Support

If you're still experiencing issues:
1. Check the error message carefully
2. Try the complete reset procedure
3. Check if Node.js version is compatible (v18.17+)
4. Ensure you have sufficient disk space (2GB+ free)

## Performance Tips for Windows

1. **Use SSD**: Ensure project is on SSD drive
2. **RAM**: Have at least 8GB RAM available
3. **Antivirus**: Exclude project folder from real-time scanning
4. **Power**: Keep laptop plugged in during development
5. **Updates**: Keep Windows and Node.js updated
