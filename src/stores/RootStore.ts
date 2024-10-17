import { CounterStore } from './CounterStore';
// Create a context for the root store
import { createContext, useContext } from 'react';

export class RootStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore();
  }
}



export const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }
  return context;
};

export const rootStore = new RootStore();