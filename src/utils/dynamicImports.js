import dynamic from 'next/dynamic';

// Dynamically import components with loading fallback
export const dynamicImport = (componentImportFn, options = {}) => {
  return dynamic(componentImportFn, {
    loading: () => <div className="loading-placeholder animate-pulse bg-gray-200 rounded-lg h-40"></div>,
    ssr: true,
    ...options,
  });
};

// Utility to load components only when they're needed (on client side)
export const clientSideComponent = (componentImportFn, options = {}) => {
  return dynamic(componentImportFn, {
    ssr: false,
    ...options,
  });
};

// Utility to load components with delay for better initial load performance
export const deferredImport = (componentImportFn, options = {}) => {
  return dynamic(() => 
    new Promise(resolve => {
      // Defer loading until after main content is rendered
      setTimeout(() => resolve(componentImportFn()), 300);
    }),
    options
  );
};

// Utility to load heavy components only when they're in viewport
export const lazyImport = (componentImportFn, options = {}) => {
  if (typeof window === 'undefined') {
    // Server-side - return placeholder
    return () => <div className="h-full w-full bg-gray-100 animate-pulse rounded-lg"></div>;
  }
  
  // Client-side - use Intersection Observer for lazy loading
  return dynamic(() => 
    new Promise(resolve => {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          resolve(componentImportFn());
          observer.disconnect();
        }
      }, { rootMargin: '200px' });
      
      observer.observe(document.body);
    }),
    options
  );
};
