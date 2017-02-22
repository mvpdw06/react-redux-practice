import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './store/store';

const rootElement = document.getElementById('app');

const renderApp = () => {
  const Counter = require('./component/counter');
  render(
    <AppContainer>
      <Provider store={store}>
        <Counter />
      </Provider>
    </AppContainer>,
    rootElement
  );
};

renderApp(rootElement);

if (module.hot) {
	module.hot.accept(
    './component/counter',
    () => renderApp(rootElement)
  );
}