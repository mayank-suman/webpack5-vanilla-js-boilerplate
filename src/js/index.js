import initApp from './app';

if (module.hot) {
  module.hot.accept('./app.js', () => {
    initApp();
  });
}
