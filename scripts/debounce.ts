export function debounce<T extends (...args: any[]) => any>(f: T, interval: number): (...args: Parameters<T>) => Promise<ReturnType<T>> {
    let timer: ReturnType<typeof setTimeout> | null = null;
  
    return (...args: Parameters<T>): Promise<ReturnType<T>> => {
      clearTimeout(timer as NodeJS.Timeout);
      return new Promise((resolve) => {
        timer = setTimeout(() => resolve(f(...args)), interval);
      });
    };
  }
  