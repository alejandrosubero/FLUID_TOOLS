import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  
    // Save data to localStorage
    saveItem(key: string, value: any): void {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    }
  
    // Retrieve data from localStorage
    getItem<T>(key: string): T | null {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue) as T;
      }
      return null;
    }
  
    // Delete data from localStorage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }
  
    // Clear all data from localStorage
    clearAll(): void {
      localStorage.clear();
    }
  }
  