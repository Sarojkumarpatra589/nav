const fs = require('fs');
const { execSync } = require('child_process');

try {
  if (process.platform === 'win32') {
    try {
      execSync('attrib -r -s -h .next /s /d', { stdio: 'ignore' });
      execSync('if exist .next rd /s /q .next', { stdio: 'ignore' });
    } catch (err) {}
  }
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
} catch (err) {}
