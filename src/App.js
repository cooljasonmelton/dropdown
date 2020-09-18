import React from 'react';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styling
import './App.css';

// components
import Menu from './Menu/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/" component={null} />
          <Route exact path="/" component={null} />
          <Route exact path="/" component={null} />
          <Route exact path="/" component={null} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
