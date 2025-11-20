System.register(['react', 'react-dom/client'], function (_export, _context) {
  'use strict';

  var React, ReactDOM;

  const Jellyfin = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const iframeRef = React.useRef(null);

    const handleIframeLoad = () => {
      setIsLoading(false);
    };

    const handleFullscreen = () => {
      if (iframeRef.current) {
        if (iframeRef.current.requestFullscreen) {
          iframeRef.current.requestFullscreen();
        } else if (iframeRef.current.webkitRequestFullscreen) {
          iframeRef.current.webkitRequestFullscreen();
        } else if (iframeRef.current.msRequestFullscreen) {
          iframeRef.current.msRequestFullscreen();
        }
      }
    };

    const openInNewTab = () => {
      window.open('http://192.168.50.124:8096/', '_blank', 'noopener,noreferrer');
    };

    return React.createElement('div', { className: 'jellyfin-container' },
      React.createElement('div', { className: 'jellyfin-header' },
        React.createElement('h1', { className: 'jellyfin-title' }, 'Jellyfin Media Server'),
        React.createElement('div', { className: 'jellyfin-controls' },
          React.createElement('button', {
            className: 'jellyfin-control-button',
            onClick: handleFullscreen,
            title: 'Fullscreen Mode'
          }, '⛶ Fullscreen'),
          React.createElement('button', {
            className: 'jellyfin-control-button',
            onClick: openInNewTab,
            title: 'Open in New Tab'
          }, '↗ New Tab')
        )
      ),
      isLoading && React.createElement('div', { className: 'jellyfin-loading' },
        React.createElement('div', { className: 'jellyfin-spinner' }),
        React.createElement('p', null, 'Loading Jellyfin Media Server...')
      ),
      React.createElement('iframe', {
        ref: iframeRef,
        className: 'jellyfin-iframe',
        src: 'http://192.168.50.124:8096/',
        title: 'Jellyfin Media Server',
        allowFullScreen: true,
        onLoad: handleIframeLoad,
        style: { display: isLoading ? 'none' : 'block' }
      })
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
        const domElement = props.domElement || document.getElementById('single-spa-application:jellyfin');
        root = ReactDOM.createRoot(domElement);
        root.render(React.createElement(Jellyfin));
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
