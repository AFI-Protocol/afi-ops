import { evaluateAgent } from '../src/agent_eval';

test('Evaluates high quality signal', () => {
  expect(evaluateAgent({ quality: 0.9 })).toBe('high-confidence');
});

test('Evaluates low quality signal', () => {
  expect(evaluateAgent({ quality: 0.2 })).toBe('low-confidence');
});
