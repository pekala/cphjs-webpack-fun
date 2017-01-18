import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'

function main() {
    const preloadedState = window.__PRELOADED_STATE__
    const store = configureStore(preloadedState)
    const rootElement = document.getElementById('app')

    render(
      <Provider store={store}>
        <App/>
      </Provider>,
      rootElement
    )
}

if (window.Promise && window.fetch && Object.assign) {
    main()
} else {
    const script = document.createElement('script');
    script.async = true;
    script.src = '/polyfills.js';
    script.onload = function() {
        main();
    };
    script.onerror = function() {
        throw new Error('Failed to load polyfills');
    };
    document.head.appendChild(script);
}
