// This script’s only job is to automate copying files from src to public.
// Once you’ve done it manually and don’t need automatic copying anymore,
// this code becomes useless and can be removed.

import fs from 'fs-extra';   //fs-extra: For copying files and folders
import path from 'path';   // to work with file and directory paths
import { fileURLToPath } from 'url'; // Importing fileURLToPath to handle __dirname in ES modules

const __filename = fileURLToPath(import.meta.url); // Convert the current module's URL to a file path
const __dirname = path.dirname(__filename); // Get the directory name where your current file is

const srcDir = path.join(__dirname, '..', 'src', 'locales'); //Source Directory (where the files are coming from)
const destDir = path.join(__dirname, '..', 'public', 'locales'); //Destination Directory (where the files will be copied to)

// Copy locales to public folder
fs.copySync(srcDir, destDir, { overwrite: true });
console.log('Locales copied to public folder successfully!');


// __dirname → Folder where your current file is
// __filename → Full path of your current file

// import.meta.url → Gives the URL of your current file (like file:///C:/yourproject/scripts/copyLocales.js).
// fileURLToPath → Converts that URL to a normal file path (like C:/yourproject/scripts/copyLocales.js).