import React,{useState} from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.

import Header from './components/Header'
import Navigation from './components/Navigation'
import AboutMe from './components/Aboutme'

import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume';

export default function App() {

// create a state variable that keeps track of what page we're on
// set that state variable to hold a string for the main page
const [currentPage, setCurrentPage] = useState('Aboutme');

const renderPage=()=>{
  if (currentPage === 'Aboutme') {
    return <AboutMe />;
  }
  else if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  else if (currentPage === 'ContactForm') {
    return <ContactForm />;
  }
 else {
  return <Resume/>
 }
}

const handlePageChange = (page) => setCurrentPage(page);
// return (
//   <div>
//     {/* We are passing the currentPage from state and the function to update it */}
//     <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//     {/* Here we are calling the renderPage method which will return a component  */}
//     {renderPage()}
//   </div>
// );

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
  return (
    <div>
      <Header/>
      <Navigation handlePageChange={handlePageChange}/>
   
       {renderPage()}
      <Footer/>
     
      
    </div>
  );
}

