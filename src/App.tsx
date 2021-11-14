import { Layout } from 'components';
import { Provider } from 'react-redux';
import { getStore } from 'store/Store';

function App() {
  return (
    <Provider store={getStore()}>
      <Layout />
    </Provider>
  );
}

export default App;
