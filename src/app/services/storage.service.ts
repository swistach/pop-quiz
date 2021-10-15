import { Injectable } from '@angular/core';
import { StorageStrategy } from '../enums';

const APP_KEY: string = 'popquiz';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  frame: Window = window;

  load(strategy: StorageStrategy = StorageStrategy.Session, key = APP_KEY) {
    const storedValue = this.frame[strategy]?.getItem(key);

    return storedValue ? JSON.parse(storedValue) : null;
  }

  save(value: [number, string][], strategy: StorageStrategy = StorageStrategy.Session, key = APP_KEY) {
    this.frame[strategy]?.setItem(key, JSON.stringify(value));
  }

  remove(strategy: StorageStrategy = StorageStrategy.Session, key = APP_KEY) {
    this.frame[strategy]?.removeItem(key)
  }
}
