import { track } from '@vercel/analytics';

export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined') {
    try {
      track(eventName, eventData);
      console.log('[Vercel Analytics Track]', eventName, eventData);
    } catch (e) {
      console.error('Failed to track event via Vercel', e);
    }
  }
};