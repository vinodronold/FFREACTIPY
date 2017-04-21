# FFREACTIPY

## Development in Progress . . .


  "scripts": {
    "build-css": "node-sass src/ -o src/ --include-path node_modules",
    "watch-css": "npm run build-css && node-sass src/ -o src/ --include-path node_modules --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }