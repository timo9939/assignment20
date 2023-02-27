import React, { useState } from 'react'

// import Header from './components/Header'
// import Navigation from './components/Navigation'
// import AboutMe from './components/Aboutme'

// import Project from './components/Project'
// import Footer from './components/Footer'

export default function Container() {
    console.log("clicked")
    const [currentPage, setCurrentPage] = useState('');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    // const renderPage = () => {
    //   if (currentPage === 'AboutMe') {
    //     return <AboutMe />;
    //   }
     
    // };
    const handlePageChange = (page) => setCurrentPage(page);
}