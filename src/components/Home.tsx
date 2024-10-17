import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../stores/RootStore';
import Counter from './Counter';

const Home: React.FC = observer(() => {
  const { counterStore } = useRootStore();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <Counter counterStore={counterStore} />
    </div>
  );
});

export default Home;