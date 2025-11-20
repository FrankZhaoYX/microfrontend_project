System.register(['react', 'react-dom/client'], function (_export, _context) {
  'use strict';

  var React, ReactDOM;
  
  const Home = () => {
    const [count, setCount] = React.useState(0);

    const incrementCounter = () => {
      setCount(prevCount => prevCount + 1);
    };

    const resetCounter = () => {
      setCount(0);
    };

    return React.createElement('div', { className: 'home-container' },
      React.createElement('h1', { className: 'home-title' }, 'Welcome to Microfrontend Architecture'),
      React.createElement('p', { className: 'home-description' },
        'This application demonstrates a modern micro frontend architecture using Single-SPA and React. ',
        'Each section (navbar, home, dashboard) is an independent React application that can be developed, ',
        'tested, and deployed separately.'
      ),
      React.createElement('div', { className: 'home-features' },
        React.createElement('div', { className: 'home-card' },
          React.createElement('h2', null, 'Interactive Counter'),
          React.createElement('div', { className: 'home-counter' }, `Count: ${count}`),
          React.createElement('div', { className: 'home-button-group' },
            React.createElement('button', {
              className: 'home-button',
              onClick: incrementCounter
            }, 'Increment'),
            React.createElement('button', {
              className: 'home-button home-button-secondary',
              onClick: resetCounter
            }, 'Reset')
          )
        ),
        React.createElement('div', { className: 'home-card' },
          React.createElement('h2', null, 'Key Features'),
          React.createElement('ul', { className: 'home-list' },
            React.createElement('li', null, 'Independent deployments for each microfrontend'),
            React.createElement('li', null, 'Framework agnostic architecture'),
            React.createElement('li', null, 'Shared navigation and routing'),
            React.createElement('li', null, 'Modern ES6+ JavaScript')
          )
        )
      ),
      React.createElement('div', { className: 'home-footer' },
        React.createElement('p', null, 'Try clicking the Dashboard link in the navbar to see another microfrontend!')
      )
    );
  };

  return {
    setters: [
      function (_react) {
        React = _react.default || _react;
      },
      function (_reactDom) {
        ReactDOM = _reactDom.default || _reactDom;
      }
    ],
    execute: function () {
      let root;

      _export('bootstrap', function bootstrap() {
        return Promise.resolve();
      });

      _export('mount', function mount(props) {
        const domElement = props.domElement || document.getElementById('single-spa-application:home');
        root = ReactDOM.createRoot(domElement);
        root.render(React.createElement(Home));
        return Promise.resolve();
      });

      _export('unmount', function unmount() {
        if (root) {
          root.unmount();
        }
        return Promise.resolve();
      });
    }
  };
});