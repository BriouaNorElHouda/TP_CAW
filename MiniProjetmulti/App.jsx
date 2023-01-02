import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Contact from './pages/Contact';
import Navbar from "./pages/Navbar/Navbar";


const App = () => {
  return (
    <div className='container'>
      
      <Navbar />
      <Switch>
        <Route path='/' exact component={Intro} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/blog' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    
    </div>
  );
};

export default App;
