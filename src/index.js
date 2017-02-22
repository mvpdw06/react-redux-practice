import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './store/store';
import { action } from './action/action';

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

// store.subscribe(renderApp);
renderApp(rootElement);

if (module.hot) {
	module.hot.accept(
    './component/counter',
    () => renderApp(rootElement)
  );
}