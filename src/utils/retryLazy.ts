import { ComponentType } from "react";

/**
 * A utility function to retry a lazy-loaded component import in case of failure.
 * @param importFn The dynamic import function (e.g., () => import('./MyComponent'))
 * @param retries The number of times to retry the import (default: 3)
 * @param interval The delay between retries in milliseconds (default: 1000)
 * @returns A Promise that resolves with the module when loaded successfully, or rejects after max retries.
 */
const retryLazy = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  retries: number = 3,
  interval: number = 1000
): Promise<{ default: T }> => {
  return new Promise((resolve, reject) => {
    const importModule = async () => {
      try {
        const module = await importFn();
        resolve(module);
      } catch (error: any) {
        // Use 'any' for the catch error for now, as specific error types can vary
        if (retries > 0) {
          console.warn(
            `Failed to load module, retrying... (${retries} attempts left)`,
            error
          );
          setTimeout(() => {
            retryLazy(importFn, retries - 1, interval).then(resolve, reject);
          }, interval);
        } else {
          console.error("Max retries reached for module import.", error);
          reject(error); // Reject after max retries, error will go to ErrorBoundary
        }
      }
    };
    importModule();
  });
};

export default retryLazy;
