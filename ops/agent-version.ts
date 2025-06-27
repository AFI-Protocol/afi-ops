import { execSync } from 'child_process';
import { readFileSync } from 'fs';

export function getAgentVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
    return pkg.version || execSync('git describe --tags').toString().trim();
  } catch {
    return '0.0.0-dev';
  }
}
