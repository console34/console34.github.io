// Loading Manager Utility
import { preloadManager } from './preloadManager.js';

export class AdvancedLoadingManager {
  constructor() {
    this.progress = 0;
    this.progressBar = null;
    this.loadingScreen = null;
    this.resources = [];
    this.loadedResources = 0;
    this.totalResources = 0;
    this.isComplete = false;
    this.preloadComplete = false;
  }

  async init() {
    this.progressBar = document.getElementById('progress-bar');
    this.progressText = document.getElementById('progress-text');
    this.progressPercentage = document.getElementById('progress-percentage');
    this.loadingScreen = document.getElementById('loading-screen');
    
    if (!this.progressBar || !this.loadingScreen) {
      console.warn('Loading screen elements not found');
      return;
    }

    this.startLoading();
    await this.preloadCriticalResources();
    this.scanForResources();
  }

  async preloadCriticalResources() {
    this.updateProgress(10);
    
    // Start preloading critical resources
    await preloadManager.preloadCriticalResources();
    
    this.preloadComplete = true;
    this.updateProgress(30);
  }

  scanForResources() {
    // Find all images on the page
    const images = document.querySelectorAll('img');
    this.totalResources = images.length;
    
    if (this.totalResources === 0) {
      this.simulateLoading();
      return;
    }
    
    // Track image loading
    images.forEach((img, index) => {
      if (img.complete) {
        this.resourceLoaded();
      } else {
        img.addEventListener('load', () => this.resourceLoaded());
        img.addEventListener('error', () => this.resourceLoaded());
      }
    });
  }

  resourceLoaded() {
    this.loadedResources++;
    const baseProgress = this.preloadComplete ? 30 : 10;
    const resourceProgress = (this.loadedResources / this.totalResources) * 60;
    const totalProgress = Math.min(baseProgress + resourceProgress, 100);
    
    this.updateProgress(totalProgress);
    
    if (this.loadedResources >= this.totalResources) {
      this.complete();
    }
  }

  simulateLoading() {
    const steps = [
      { duration: 300 },
      { duration: 500 },
      { duration: 800 },
      { duration: 400 },
      { duration: 300 },
      { duration: 200 }
    ];

    let currentStep = 0;
    const totalSteps = steps.length;

    const nextStep = () => {
      if (currentStep >= totalSteps) {
        this.complete();
        return;
      }

      const step = steps[currentStep];
      const progress = ((currentStep + 1) / totalSteps) * 100;
      
      this.updateProgress(progress);
      currentStep++;

      setTimeout(nextStep, step.duration);
    };

    nextStep();
  }

  updateProgress(percentage) {
    this.progress = percentage;
    
    if (this.progressBar) {
      this.progressBar.style.width = `${percentage}%`;
    }
  }

  complete() {
    if (this.isComplete) return;
    
    this.isComplete = true;
    this.updateProgress(100);
    
    setTimeout(() => {
      if (this.loadingScreen) {
        this.loadingScreen.style.opacity = '0';
        setTimeout(() => {
          this.loadingScreen.style.display = 'none';
          document.dispatchEvent(new CustomEvent('siteLoaded'));
        }, 500);
      }
    }, 500);
  }

  startLoading() {
    this.updateProgress(0);
  }
}

// Global loading manager instance
export const loadingManager = new AdvancedLoadingManager();

// Initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadingManager.init();
    });
  } else {
    loadingManager.init();
  }
}
