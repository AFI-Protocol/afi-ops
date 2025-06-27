// Simple agent evaluator stub
export function evaluateAgent(signal: any): string {
  if (!signal || typeof signal !== 'object') return 'invalid';
  return signal.quality > 0.8 ? 'high-confidence' : 'low-confidence';
}
