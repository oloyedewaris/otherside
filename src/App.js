import { Explore } from '@material-ui/icons';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Slider from "./components/Navbar/Navbar";
import Home from './pages/Home';
import BuyOthered from './pages/BuyOthered';
import ClaimOthered from './pages/ClaimOthered';
import Faq from './pages/Faq';
import Obelisk from './pages/Obelisk';
import Sdk from './pages/Sdk';
import TheWorld from './pages/TheWorld';

function App() {
  return (
    <React.Suspense fallback={<h1>Loading</h1>}>
      <div className='main_app'>
        <Slider />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/the_world" component={TheWorld} />
          <Route path="/sdk" component={Sdk} />
          <Route path="/faq" component={Faq} />
          <Route path="/explore" component={Explore} />
          <Route path="/buy_othered" component={BuyOthered} />
          <Route path="/claim_othered" component={ClaimOthered} />
          <Route path="/obelisk" component={Obelisk} />
        </Switch>
      </div>
    </React.Suspense>
  );
}

export default App;
