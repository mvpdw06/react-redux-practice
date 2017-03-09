import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './store/store';

const rootElement = document.getElementById('app');

const renderApp = () => {
  const RouterComponent = require('./component/routerComponent')
  render(
    <AppContainer>
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    </AppContainer>,
    rootElement
  );
};

renderApp(rootElement);

if (module.hot) {
	module.hot.accept(
    './component/routerComponent.js',
    () => renderApp(rootElement)
  );
}