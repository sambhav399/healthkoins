const fs = require('node:fs');
const path = require('node:path');

const ROOT = process.cwd();
const WORKSPACES = [
  'apps',
  'packages',
  'services'
];

const FOLDERS_TO_DELETE = [
  'node_modules',
  'dist',
  'build',
  'out',
  '.next',
  '.turbo',
  '.cache',
  '.rpt2_cache',
  '.idea',
  '__pycache__',
  '.venv',
  'venv',
  '.pytest_cache',
  '.mypy_cache',
  '.ruff_cache',
  'coverage'
];

const FILES_TO_DELETE = [
  '*.tsbuildinfo',
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock'
];

// Safety: never auto-delete lockfiles
/** @type {Set<string>} */
const FORBIDDEN = new Set([]);

/** @param {string} target */
function rm(target) {
  if (fs.existsSync(target)) {
    console.log(`🧹 Removing: ${target}`);
    fs.rmSync(target, {
      recursive: true,
      force: true
    });
  }
}

/** @param {string} filename */
function isFileToDelete(filename) {
  // Check if file matches any pattern in FILES_TO_DELETE
  return FILES_TO_DELETE.some((pattern) => {
    if (pattern.startsWith('*.')) {
      // Handle glob patterns like *.tsbuildinfo
      return filename.endsWith(pattern.substring(1));
    }
    // Handle exact filenames
    return filename === pattern;
  });
}

/** @param {string} dir */
function cleanDir(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir)) {
    if (FORBIDDEN.has(entry)) continue;

    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory() && FOLDERS_TO_DELETE.includes(entry)) {
      rm(full);
    }

    if (stat.isFile() && isFileToDelete(entry)) {
      rm(full);
    }
  }
}

/** @param {string} workspaceRoot */
function cleanWorkspace(workspaceRoot) {
  if (!fs.existsSync(workspaceRoot)) return;

  for (const project of fs.readdirSync(workspaceRoot)) {
    const projectPath = path.join(workspaceRoot, project);
    if (fs.statSync(projectPath).isDirectory()) {
      cleanDir(projectPath);
    }
  }
}

// Clean workspaces
for (const ws of WORKSPACES) {
  cleanWorkspace(path.join(ROOT, ws));
}

// Clean root-level artifacts
cleanDir(ROOT);

console.log('✅ Monorepo cleaned safely.');
