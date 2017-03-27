import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import store from './store/store';

const rootElement = document.getElementById('app');

const renderApp = () => {
  const RouterSetting = require('./component/routerSetting')
  render(
    <AppContainer>
      <I18nextProvider i18n={ i18n }>
        <Provider store={store}>
          <RouterSetting />
        </Provider>
      </I18nextProvider >
    </AppContainer>,
    rootElement
  );
};

renderApp(rootElement);

if (module.hot) {
	module.hot.accept(
    './component/routerSetting.js',
    () => renderApp(rootElement)
  );
}