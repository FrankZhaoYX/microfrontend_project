System.register(['react', 'react-dom/client'], function (_export, _context) {
  'use strict';

  var React, ReactDOM;
  
  function Home() {
    const [count, setCount] = React.useState(0);

    return React.createElement('div', { className: 'home-container' },
      React.createElement('h1', { className: 'home-title' }, 'Welcome to Single-SPA! 🚀'),
      React.createElement('p', { className: 'home-description' },
        'This is a micro frontend architecture demo using single-spa and React. ',
        'Each section you see (navbar, home, dashboard) is an independent React application ',
        'that can be developed, tested, and deployed separately.'
      ),
      React.createElement('div', { className: 'home-card' },
        React.createElement('h2', null, 'Interactive Counter Demo'),
        React.createElement('div', { className: 'home-counter' }, `Count: ${count}`),
        React.createElement('button', {
          className: 'home-button',
          onClick: () => setCount(count + 1)
        }, 'Increment')
      ),
      React.createElement('div', { className: 'home-footer' },
        React.createElement('p', null, '👆 Try clicking the Dashboard link in the navbar to see another microfrontend!')
      )
    );
  }

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