import { execFileSync } from 'child_process';
import { rmSync, statSync } from 'fs';
import path from 'path';

// Builds public/icons.zip, the site's "Download all": every icon as SVG and
// PNG in each style and size, with meta-data.json, in an icons/ folder. Runs
// as part of `yarn update-icons`, after the SVGs are cleaned.

const PUBLIC_PATH = path.join(process.cwd(), 'public');
const ZIP_PATH = path.join(PUBLIC_PATH, 'icons.zip');

// a fresh zip, so icons that were renamed or removed aren't left in it
rmSync(ZIP_PATH, { force: true });

// -X leaves out macOS file attributes, and hidden files (like .DS_Store)
// are skipped
execFileSync('zip', ['-r', '-q', '-X', ZIP_PATH, 'icons', '-x', '*/.*', '.*'], {
  cwd: PUBLIC_PATH,
  stdio: 'inherit'
});

const files = execFileSync('zipinfo', ['-1', ZIP_PATH])
  .toString()
  .split('\n')
  .filter((name) => name && !name.endsWith('/')).length;
const megabytes = (statSync(ZIP_PATH).size / 1024 / 1024).toFixed(1);
console.log(`Built icons.zip with ${files} files (${megabytes} MB)`);
