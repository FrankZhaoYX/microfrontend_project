System.register(['react', 'react-dom/client'], function (_export, _context) {
  'use strict';

  var React, ReactDOM;
  
  function Navbar() {
    const navigate = (path) => {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return React.createElement('nav', { className: 'navbar' },
      React.createElement('h1', { className: 'navbar-brand' }, 'Single-SPA Demo'),
      React.createElement('ul', { className: 'navbar-menu' },
        React.createElement('li', null,
          React.createElement('button', {
            className: 'navbar-button',
            onClick: () => navigate('/home')
          }, 'Home')
        ),
        React.createElement('li', null,
          React.createElement('button', {
            className: 'navbar-button',
            onClick: () => navigate('/dashboard')
          }, 'Dashboard')
        )
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
        const domElement = props.domElement || document.getElementById('single-spa-application:navbar');
        root = ReactDOM.createRoot(domElement);
        root.render(React.createElement(Navbar));
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