import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
import Home from './components/Home';

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
export default function App() {
  return (
    <div>
      {<Header/>
      /*<Navigation/>
      <Project/>
      <Footer/> */}
      <Home />
    </div>
  );
}

