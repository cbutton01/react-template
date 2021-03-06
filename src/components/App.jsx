import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){

  const main = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px',
  };

  return (
    <div>
      <Header/>
      <div style={main}>
        <div>
        </div>
        <Switch>
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
