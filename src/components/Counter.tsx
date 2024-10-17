import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CounterStore } from '../stores/CounterStore';
import { getLevel, Level } from '../utils/levelUtils';

interface CounterProps {
  counterStore: CounterStore;
}

const Counter: React.FC<CounterProps> = observer(({ counterStore }) => {
  const level: Level = getLevel(counterStore.count);
  useEffect(() => {
    counterStore.fetchInitialCount();
  }, [counterStore]);

  if (counterStore.isLoading) {
    return <div>Loading...</div>;
  }

  if (counterStore.error) {
    return <div>Error: {counterStore.error}</div>;
  }

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {counterStore.count}</p>
      <p style={{color: level.color}}>Level: {level.emoji}</p>
      <p>
        Is Positive:{' '}
        <span className={counterStore.isPositive ? 'positive-indicator' : 'negative-indicator'}>
          {counterStore.isPositive ? 'Yes' : 'No'}
        </span>
      </p>
      {counterStore.isPositive ? (
        <p className="positive-indicator">Positive!! 🎉</p>
      ) : (
        <p className="negative-indicator">Negative 👎</p>
      )}
      <button className="button button-increment" onClick={() => counterStore.increment()}>Increment</button>
      <button className="button button-decrement" onClick={() => counterStore.decrement()}>Decrement</button>
      <button className="button button-reset" onClick={() => counterStore.reset()}>Reset</button>
      <button className="button button-fetch" onClick={() => counterStore.fetchInitialCount()}>Fetch New Count</button>
    </div>
  );
});

export default Counter;