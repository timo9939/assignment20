import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.

import Header from './components/Header'
import Navigation from './components/Navigation'
import AboutMe from './components/Aboutme'

import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume';


// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
export default function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <ContactForm/>
      <Resume/>

      <Footer/>
      
      
    </div>
  );
}

