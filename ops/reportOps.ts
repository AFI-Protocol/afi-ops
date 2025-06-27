import { configHash, agentVersion, initSentry } from '@afi-ops';
import * as pkg from '../package.json';

initSentry();
export const buildInfo = {
  version: agentVersion(pkg.version),
  configHash: configHash()
};
