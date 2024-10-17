import { makeAutoObservable, runInAction } from 'mobx';

export class CounterStore {
  count: number = 0;
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  get isPositive() {
    return this.count > 0;
  }

  reset() {
    this.count = 0;
  }

  

  async fetchInitialCount() {
    this.isLoading = true;
    this.error = null;
    try {
      // Simulating an API call
      const response = await new Promise<number>((resolve) => 
        setTimeout(() => resolve(Math.floor(Math.random() * 201) - 100), 1000)
      );
      runInAction(() => {
        this.count = response;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Failed to fetch initial count';
        this.isLoading = false;
      });
    }
  }
}