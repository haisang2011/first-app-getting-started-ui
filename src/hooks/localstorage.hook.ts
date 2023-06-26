import React from "react";

const getValueFromCheckingInstanceOf =
  (instance: any, type: any) => instance instanceof type ? instance() : instance;

type Value<T> = T | (() => T);

function useLocalStorage<T>(key: string, initialValue: Value<T>) {
  const [storedValue, setStoredValue] = React.useState<T>(
    () => {
      try {
        let result;
        const item = localStorage.getItem(key);

        if (item) {
          result = JSON.parse(item);
        } else if (initialValue instanceof Function) {
          result = initialValue();
        } else {
          result = initialValue;
        }

        return result;
      } catch (error) {
        return getValueFromCheckingInstanceOf(initialValue, Function);
      }
    }
  );

  const setValue = (value: Value<T>) => {
    try {
      const valueToStore = getValueFromCheckingInstanceOf(value, Function);
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
    }
  }

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === localStorage && event.key === key) {
        try {
          const item = localStorage.getItem(key);
          setStoredValue(item ? JSON.parse(item) : initialValue instanceof Function ? initialValue() : initialValue);
        } catch (error) {
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [initialValue, key]);

  return [storedValue, setValue];
}

export default useLocalStorage;