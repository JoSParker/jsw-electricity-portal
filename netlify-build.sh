#!/bin/bash

# Exit on error
set -e

# Log build info
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building Angular application..."
npm run build -- --configuration production

# Create a _redirects file in the distribution folder as a fallback
echo "/* /index.html 200" > dist/jsw/_redirects

echo "Build completed successfully!"
