import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import AboutMe from './components/views/AboutMe/AboutMe';
import Contact from './components/views/Contact/Contact';
import NotFound from './components/views/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutMe' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);


export default App;
