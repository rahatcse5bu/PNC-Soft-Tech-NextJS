// Utility functions for optimizing images and lazy loading
import { useEffect, useState } from 'react';

// Custom hook for lazy loading images
export function useLazyLoading(ref, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, {
      rootMargin: '100px',
      threshold: 0.1,
      ...options
    });
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);
  
  return isIntersecting;
}

// Function to generate responsive image srcSet
export function generateSrcSet(src, sizes = [640, 750, 1080, 1920]) {
  if (!src) return '';
  
  // For external URLs
  if (src.startsWith('http')) {
    return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ');
  }
  
  // For local images
  const basePath = src.split('.').slice(0, -1).join('.');
  const ext = src.split('.').pop();
  
  return sizes.map(size => `${basePath}-${size}.${ext} ${size}w`).join(', ');
}

// Function to optimize image loading based on device
export function getOptimizedImageUrl(src, width = 800) {
  if (!src) return '';
  
  // For external URLs
  if (src.startsWith('http')) {
    // Some external services have query params for resizing
    if (src.includes('cloudinary.com')) {
      return src.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`);
    }
    return src;
  }
  
  // For local images, assume Next.js Image optimization
  return src;
}

// Detect if WebP is supported
export function supportsWebP() {
  if (typeof window === 'undefined') return false;
  
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

// Get appropriate image format based on browser support
export function getOptimalFormat() {
  if (typeof window === 'undefined') return 'jpg';
  return supportsWebP() ? 'webp' : 'jpg';
}
