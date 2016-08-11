import ReactOnRails from 'react-on-rails';
import TodoApp from './TodoAppClient';

// This is how react_on_rails can see the TodoApp in the browser.
ReactOnRails.register({ TodoApp });
