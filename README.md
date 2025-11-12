# Single-SPA Demo Application

A demonstration of micro frontend architecture using single-spa with React and vanilla JavaScript.

## Architecture

This demo consists of:

1. **Root Config** (`root-config.js`) - Orchestrates all microfrontends
2. **Navbar Microfrontend** (`navbar.js`) - Navigation bar (always active)
3. **Home Microfrontend** (`home.js`) - Home page with counter demo
4. **Dashboard Microfrontend** (`dashboard.js`) - Task management dashboard

## Key Features

- **Independent Microfrontends**: Each app is self-contained and can be developed independently
- **Route-based Activation**: Microfrontends mount/unmount based on URL paths
- **Shared Dependencies**: React and ReactDOM loaded via CDN using SystemJS
- **No Build Process**: Uses SystemJS format for immediate browser execution

## Project Structure

```
single-spa-demo/
├── index.html          # Main HTML file with SystemJS configuration
├── root-config.js      # Single-spa root configuration
├── navbar.js           # Navbar microfrontend
├── home.js             # Home page microfrontend
├── dashboard.js        # Dashboard microfrontend
├── server.js           # Simple HTTP server
├── package.json        # Package configuration
└── README.md           # This file
```

## How It Works

### 1. SystemJS Import Maps
The `index.html` file defines import maps that tell the browser where to find:
- External dependencies (React, ReactDOM, single-spa)
- Internal microfrontends (navbar, home, dashboard)

### 2. Single-SPA Registration
The root config registers each microfrontend with:
- A unique name
- A loading function
- An activation function (determines when it's active)
- Custom props (like DOM element references)

### 3. Lifecycle Functions
Each microfrontend exports three functions:
- `bootstrap()` - Initialize the app (runs once)
- `mount()` - Render the app when activated
- `unmount()` - Clean up when deactivated

### 4. Routing
- `/` or `/home` → Home microfrontend
- `/dashboard` → Dashboard microfrontend
- Navbar is always active

## Running the Application

### Option 1: Using Node.js Server

```bash
# Navigate to the project directory
cd single-spa-demo

# Start the server
node server.js

# Open your browser to http://localhost:8080
```

### Option 2: Using Python HTTP Server

```bash
# Python 3
python -m http.server 8080

# Open your browser to http://localhost:8080
```

### Option 3: Using any HTTP Server

```bash
# npx http-server
npx http-server -p 8080

# Open your browser to http://localhost:8080
```

## Usage

1. Start the server using one of the methods above
2. Navigate to `http://localhost:8080`
3. Click navigation links to switch between Home and Dashboard
4. Each page loads its respective microfrontend dynamically

## Understanding the Code

### SystemJS Format

Each microfrontend uses the SystemJS module format:

```javascript
System.register(['react', 'react-dom/client'], function (_export, _context) {
  'use strict';
  
  var React, ReactDOM;
  
  return {
    setters: [...],  // Import dependencies
    execute: function () {
      // Export lifecycle functions
      _export('bootstrap', ...);
      _export('mount', ...);
      _export('unmount', ...);
    }
  };
});
```

### React Without JSX

This demo uses `React.createElement()` instead of JSX to avoid requiring a build step:

```javascript
// Instead of: <div className="app">Hello</div>
React.createElement('div', { className: 'app' }, 'Hello')
```

## Extending the Demo

### Add a New Microfrontend

1. Create a new `.js` file (e.g., `profile.js`)
2. Follow the SystemJS format with bootstrap/mount/unmount
3. Add it to the import map in `index.html`
4. Register it in `root-config.js`
5. Add a DOM element in `index.html` (if needed)

### Add Build Process

For a production app, you'd typically:
- Use Webpack with `systemjs-webpack-interop`
- Enable JSX support
- Add TypeScript
- Implement lazy loading
- Add environment-specific configs

## Benefits of This Architecture

✅ **Independent Development**: Teams can work on separate microfrontends
✅ **Independent Deployment**: Deploy changes without affecting other apps
✅ **Technology Agnostic**: Mix React, Vue, Angular, etc.
✅ **Incremental Migration**: Migrate legacy apps piece by piece
✅ **Shared Dependencies**: Load React once, use everywhere

## Common Issues

### CORS Errors
Make sure you're using a proper HTTP server, not opening `index.html` directly.

### Module Not Found
Check that all imports in `index.html` import map are correct.

### React Not Rendering
Verify that the DOM elements in `index.html` match the IDs in each microfrontend.

## Learn More

- [single-spa Documentation](https://single-spa.js.org/)
- [SystemJS Documentation](https://github.com/systemjs/systemjs)
- [Micro Frontends](https://micro-frontends.org/)

## License

MIT