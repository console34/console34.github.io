// Preload Manager for critical resources
export class PreloadManager {
  constructor() {
    this.criticalResources = [
      '/images/logos/sliding_doors.apng',
      '/images/logos/reversed.apng',
      '/images/logos/workshop_logo.apng',
      '/images/logos/ponte.apng',
      '/images/logos/logo.png',
      '/images/logos/logo_text.png',
      '/images/logos/nets-logo.png',
      '/images/logos/logo-iuss.svg',
      '/images/logos/efc-logo.webp',
      '/images/logos/imt-logo.png',
      '/images/keynotes/mt.png'
    ];
    this.loadedResources = 0;
    this.totalResources = 0;
  }

  async preloadCriticalResources() {
    this.totalResources = this.criticalResources.length;
    
    const preloadPromises = this.criticalResources.map(resource => {
      return this.preloadResource(resource);
    });

    try {
      await Promise.allSettled(preloadPromises);
      console.log('Critical resources preloaded');
    } catch (error) {
      console.warn('Some resources failed to preload:', error);
    }
  }

  preloadResource(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.loadedResources++;
        resolve(url);
      };
      
      img.onerror = () => {
        this.loadedResources++;
        reject(new Error(`Failed to load: ${url}`));
      };
      
      img.src = url;
    });
  }

  getProgress() {
    return this.totalResources > 0 ? (this.loadedResources / this.totalResources) * 100 : 0;
  }
}

// Global preload manager instance
export const preloadManager = new PreloadManager();
