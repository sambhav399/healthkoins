const { execSync } = require('node:child_process');

/** @param {string} cmd */
const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

const stagedFiles = execSync('git diff --name-only --cached --diff-filter=ACMR')
  .toString()
  .trim();

run('pnpm exec biome check --write --staged --no-errors-on-unmatched');

if (stagedFiles) {
  const files = stagedFiles
    .split('\n')
    .map((f) => `"${f}"`)
    .join(' ');
  execSync(`git add -- ${files}`);
}
