import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
  // Link,
  // Redirect
} from 'react-router-dom';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';

import store from './redux/store';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import PostListContainer from './containers/PostList';
import Welcome from './components/Welcome';

import './styles/index.css';

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router>
        <MainLayout>
          <App>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/login" render={() => <form><label htmlFor="user-input" /><input id="user-input" /></form>} />
              <Route path="/new-post" render={() => <button>Submit a new post</button>} />
              <Route path="/lessons/:lessonid/posts" component={PostListContainer} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </App>
        </MainLayout>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
