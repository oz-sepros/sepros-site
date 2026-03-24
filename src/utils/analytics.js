export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...eventData });
    console.log('[Analytics DataLayer Push]', eventName, eventData);
  }
};