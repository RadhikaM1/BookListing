import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import BookDetails from './components/BookDetails';
import sagas from './redux/sagas';
import reducers from './redux/reducers';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider>
        <Router>
          <Switch>
            <Route path="/details/:id" component={BookDetails} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Router>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
