System.register(['react', 'react-dom/client'], function (_export, _context) {
  'use strict';

  var React, ReactDOM;
  
  function Dashboard() {
    const [tasks, setTasks] = React.useState([
      { id: 1, title: 'Build navbar microfrontend', completed: true },
      { id: 2, title: 'Build home microfrontend', completed: true },
      { id: 3, title: 'Build dashboard microfrontend', completed: true },
      { id: 4, title: 'Deploy to production', completed: false }
    ]);

    const [newTask, setNewTask] = React.useState('');

    const toggleTask = (id) => {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };

    const addTask = () => {
      if (newTask.trim()) {
        setTasks([...tasks, {
          id: Date.now(),
          title: newTask,
          completed: false
        }]);
        setNewTask('');
      }
    };

    const completedCount = tasks.filter(t => t.completed).length;

    return React.createElement('div', { className: 'dashboard-container' },
      React.createElement('h1', { className: 'dashboard-title' }, '📊 Dashboard'),
      React.createElement('div', { className: 'dashboard-input-container' },
        React.createElement('input', {
          className: 'dashboard-input',
          type: 'text',
          placeholder: 'Add a new task...',
          value: newTask,
          onChange: (e) => setNewTask(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && addTask()
        }),
        React.createElement('button', {
          className: 'dashboard-add-button',
          onClick: addTask
        }, 'Add Task')
      ),
      React.createElement('ul', { className: 'dashboard-task-list' },
        tasks.map(task =>
          React.createElement('li', {
            key: task.id,
            className: 'dashboard-task-item',
            onClick: () => toggleTask(task.id)
          },
            React.createElement('input', {
              type: 'checkbox',
              checked: task.completed,
              onChange: () => toggleTask(task.id),
              className: 'dashboard-checkbox'
            }),
            React.createElement('span', {
              className: task.completed ? 'dashboard-task-text completed' : 'dashboard-task-text'
            }, task.title)
          )
        )
      ),
      React.createElement('div', { className: 'dashboard-stats' },
        React.createElement('h3', null, '📈 Progress'),
        React.createElement('p', null,
          `${completedCount} of ${tasks.length} tasks completed`
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
        const domElement = props.domElement || document.getElementById('single-spa-application:dashboard');
        root = ReactDOM.createRoot(domElement);
        root.render(React.createElement(Dashboard));
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