import * as Sentry from '@sentry/node';

export function initSentry(dsn: string) {
  Sentry.init({ dsn, tracesSampleRate: 1.0 });
}

export function captureError(err: Error) {
  Sentry.captureException(err);
}
