import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
// import { ParallaxProvider } from 'react-scroll-parallax';


import Home from './components/Home';
// import Subheader from './components/Subheader';
import About from './components/About';
import Projects from './components/Projects';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
// import NavBar from './components/NavBar';
 
class App extends Component {
  render() {
    return (
	<div>
	
	<BrowserRouter>
	  <Switch>
		 <Route path="/" component={Home} exact/>
		 <Route path="/about" component={About}/>
		 <Route path="/projects" component={Projects}/>
		 <Route path="/careers" component={Careers}/>
		 <Route path="/contact" component={Contact}/>
		<Route component={Error}/>
	   </Switch>
	   
	<Footer />
 	</BrowserRouter>
	</div>
    );
  }
}

export default App;