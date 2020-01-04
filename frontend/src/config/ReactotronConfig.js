import Reactotrom from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotrom.configure().connect();

  tron.clear();

  console.tron = tron;
}
