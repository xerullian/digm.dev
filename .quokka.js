// .quokka.js
/**
 * @type {import('@wallaby/quokka-config').IQuokkaConfig}
 */
module.exports = () => {
  let bunPath;
  try {
    // Use 'bun --bun' to reliably get the executable path
    bunPath = require('node:child_process')
      .execSync('bun --bun')
      .toString()
      .trim();
    console.log(`Quokka: Using Bun executable found at: ${bunPath}`);
  } catch (error) {
    console.error(
      'Quokka: Failed to find Bun executable using "bun --bun".\n' +
        'Ensure Bun is installed and accessible in your system PATH.',
      error,
    );
    // You could hardcode a path here as a fallback if needed, but it's less portable:
    // bunPath = '/home/your_user/.bun/bin/bun'; // Example path
    if (!bunPath) {
      throw new Error(
        'Quokka configuration failed: Could not locate Bun executable.',
      );
    }
  }

  return {
    // Tell Quokka to use the Bun executable as its runtime
    // The 'node' property is commonly used for specifying the runtime path
    node: bunPath,

    // Optional: If Bun needs specific environment variables, set them here
    // env: {
    //   NODE_ENV: 'development',
    //   // Add Bun's directory to PATH if needed for child processes spawned by your code
    //   path: require('path').dirname(bunPath)
    // },

    // Bun handles TypeScript natively, so you usually don't need TS compiler setup here
    // unless you have very specific needs.
  };
};
