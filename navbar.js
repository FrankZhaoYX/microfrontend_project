System.register(['react', 'react-dom/client'], function (_export, _context) {
  'use strict';

  var React, ReactDOM;
  
  const Navbar = () => {
    const [activeRoute, setActiveRoute] = React.useState(window.location.pathname);

    React.useEffect(() => {
      const handleRouteChange = () => {
        setActiveRoute(window.location.pathname);
      };

      window.addEventListener('popstate', handleRouteChange);
      return () => window.removeEventListener('popstate', handleRouteChange);
    }, []);

    const navigate = (path) => {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    };

    const isActive = (path) => {
      if (path === '/home') {
        return activeRoute === '/' || activeRoute === '/home';
      }
      return activeRoute.startsWith(path);
    };

    return React.createElement('nav', { className: 'navbar' },
      React.createElement('h1', { className: 'navbar-brand' }, 'Microfrontend App'),
      React.createElement('ul', { className: 'navbar-menu' },
        React.createElement('li', null,
          React.createElement('button', {
            className: `navbar-button ${isActive('/home') ? 'active' : ''}`,
            onClick: () => navigate('/home')
          }, 'Home')
        ),
        React.createElement('li', null,
          React.createElement('button', {
            className: `navbar-button ${isActive('/dashboard') ? 'active' : ''}`,
            onClick: () => navigate('/dashboard')
          }, 'Dashboard')
        ),
        React.createElement('li', null,
          React.createElement('button', {
            className: `navbar-button navbar-button-jellyfin ${isActive('/jellyfin') ? 'active' : ''}`,
            onClick: () => navigate('/jellyfin'),
            title: 'Jellyfin Media Server'
          }, 'Jellyfin')
        )
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