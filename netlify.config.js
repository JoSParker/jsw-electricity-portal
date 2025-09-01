// netlify.config.js - This file helps with Angular SPA deployments on Netlify
module.exports = {
  // Ensure _redirects and _headers get processed correctly
  processFolders: ['./dist/jsw'],
  // Add redirect rules programmatically
  onPostBuild: async ({ utils }) => {
    console.log('Adding SPA redirect rules...');
    const fs = require('fs');
    const path = require('path');
    
    // Define the _redirects content for SPA
    const redirectsContent = '/* /index.html 200';
    
    // Write to the built site folder
    fs.writeFileSync(path.join('./dist/jsw', '_redirects'), redirectsContent);
    console.log('Created _redirects file');

    // Also generate a _headers file
    const headersContent = '/*\n  Cache-Control: no-cache\n  X-Frame-Options: DENY';
    fs.writeFileSync(path.join('./dist/jsw', '_headers'), headersContent);
    console.log('Created _headers file');
  }
};
