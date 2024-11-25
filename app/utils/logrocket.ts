import LogRocket from 'logrocket';

export const initializeLogRocket = () => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        LogRocket.init('bqevyx/glamora');
    }
  };