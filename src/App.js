import { Explore } from '@material-ui/icons';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Slider from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import Obelisk from './pages/Obelisk';
import Sdk from './pages/Sdk/Sdk';
import TheWorld from './pages/TheWorld';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Suspense fallback={<h1>Loading</h1>}>
      <div className='main_app'>
          <Slider />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/the_world" component={TheWorld} />
          <Route exact path="/sdk" component={Sdk} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/obelisk" component={Obelisk} />
        </Switch>
        <Footer/>
      </div>
    </React.Suspense>
  );
}

export default App;
