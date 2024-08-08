export function debounce<T extends (...args: any[]) => any>(
  f: T,
  interval: number,
  debouncing: Ref<boolean>
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    clearTimeout(timer as NodeJS.Timeout);
    debouncing.value = true;

    return new Promise((resolve) => {
      timer = setTimeout(() => {
        resolve(f(...args));
        debouncing.value = false;
      }, interval);
    });
  };
}
