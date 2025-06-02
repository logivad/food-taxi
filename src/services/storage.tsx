const prefix = 'ft-';

export function saveToStorage(key: string, value: unknown) {
  localStorage.setItem(prefix + key, JSON.stringify(value));
}

export function getFromStorage<T>(key: string): T | null {
  try {
    const value = localStorage.getItem(prefix + key);

    if (value === null) {
      return value;
    }

    return JSON.parse(value);
  } catch (error) {
    console.error(error);
    return null;
  }
}
