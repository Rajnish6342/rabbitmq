const fs = require('fs');
const path = require('path');

const bootFiles = async () => {
  try {
    const bootFiles = await fs.readdirSync(path.join(__dirname, 'boot'));
    const bootFilesPaths = bootFiles.map(file => path.join(__dirname, 'boot', file));
    const bootFilesModules = bootFilesPaths.map(file => require(file)());
    await Promise.all(bootFilesModules);
  } catch (error) {
    console.error('Error at bootFiles', error);
  }
}

module.exports = bootFiles;