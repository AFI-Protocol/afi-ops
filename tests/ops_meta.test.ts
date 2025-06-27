import { configHash } from '@afi-ops';

it('produces a stable hash for default config', () => {
  expect(configHash()).toMatch(/^[a-f0-9]{8}/);
});
