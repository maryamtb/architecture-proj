import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/homepage.component';
import AboutPage from './pages/about/aboutpage.component';
import ProjectsPage from './pages/projects/projectspage.component';
import CareersPage from './pages/careers/careerspage.component';
import ContactPage from './pages/contact/contactpage.component';
import ErrorPage from './pages/error/errorpage.component';
 
class App extends Component {
  render() {
    return (
	<div>
	<BrowserRouter>
	  <Switch>
		 <Route exact path="/" component={HomePage} />
		 <Route path="/about" component={AboutPage}/>
		 <Route path="/projects" component={ProjectsPage}/>
		 <Route path="/careers" component={CareersPage}/>
		 <Route path="/contact" component={ContactPage}/>
		<Route component={ErrorPage}/>
	   </Switch>
 	</BrowserRouter>
	</div>
    );
  }
}

export default App;