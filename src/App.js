import React, {lazy, Suspense} from 'react';
import './App.css';
import  Nav  from './components/nav/nav.component';
import {Route} from 'react-router-dom';
import { Footer } from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const ProjectPage = lazy(() => import('./pages/project/ProjectPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));

function App() {
  return (
    <div className="container">
      <Nav />
      <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/project' component={ProjectPage} />
        <Route exact path='/contact' component={ContactPage} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
