System.register(['single-spa'], function (_export, _context) {
  'use strict';

  var registerApplication, start;

  return {
    setters: [
      function (_singleSpa) {
        registerApplication = _singleSpa.registerApplication;
        start = _singleSpa.start;
      }
    ],
    execute: function () {
      // Register the navbar - always active
      registerApplication({
        name: '@demo/navbar',
        app: () => System.import('@demo/navbar'),
        activeWhen: () => true,
        customProps: {
          domElement: document.getElementById('single-spa-application:navbar')
        }
      });

      // Register home page - active at root path
      registerApplication({
        name: '@demo/home',
        app: () => System.import('@demo/home'),
        activeWhen: location => location.pathname === '/' || location.pathname === '/home',
        customProps: {
          domElement: document.getElementById('single-spa-application:home')
        }
      });

      // Register dashboard - active at /dashboard path
      registerApplication({
        name: '@demo/dashboard',
        app: () => System.import('@demo/dashboard'),
        activeWhen: location => location.pathname.startsWith('/dashboard'),
        customProps: {
          domElement: document.getElementById('single-spa-application:dashboard')
        }
      });

      // Register jellyfin - active at /jellyfin path
      registerApplication({
        name: '@demo/jellyfin',
        app: () => System.import('@demo/jellyfin'),
        activeWhen: location => location.pathname.startsWith('/jellyfin'),
        customProps: {
          domElement: document.getElementById('single-spa-application:jellyfin')
        }
      });

      // Start single-spa
      start({
        urlRerouteOnly: true,
      });
    }
  };
});