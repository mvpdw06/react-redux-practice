import { render } from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import store from './store/store';
import Counter from './component/counter';

const rootElement = document.getElementById('app');

/*ReactDom.render(
	<AppContainer> 
		<App />
	</AppContainer>,
	rootElement
);

if (module.hot) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		ReactDom.render(
			<AppContainer> 
				<NextApp />
			</AppContainer>,
			rootElement
		);
	});
}*/

const renderFunction = () => {
  render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'           
        })            
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'           
        })            
      }
    />,
    rootElement
  );
};

store.subscribe(renderFunction);
renderFunction();