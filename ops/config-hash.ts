import { createHash } from 'crypto';

export function getConfigHash(config: object): string {
  const json = JSON.stringify(config, Object.keys(config).sort());
  return createHash('sha256').update(json).digest('hex');
}
