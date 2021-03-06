import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const render = (Component) => ReactDOM.render(
  <Component />,
  document.getElementById('root')
);

render(App);

reportWebVitals();