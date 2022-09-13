
import React  from 'react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Stopwatch  from './component/watch';
import Eventhandler from './component/eventhandler';
import Counter from './component/counter';
import Ref from './component/ref';
import Bform from './component/bform';
// import Nameform from './component/dform';
import Fancyform from './component/fancyform';
import Listitem from './component/List';

function App() {
  
  return (
    <div className="App">
      {/* <Eventhandler/>
      <Stopwatch/>
      <Counter/>
      <Ref/>
      <Bform/>
      <Nameform
       getErrorMessage={value => {
        if (value.length < 3) {
          return `Value must be at least 3 characters, but is only ${value.length}`
        }
        if (!value.includes('s')) {
          return `Value does not include "s" but it should!`
        }
        return null
      }}
      />
      <Fancyform/>
      <Listitem/> */}
      <Nav/>
   
      <Routes>
        <Route exact path="/" element={<Eventhandler/>} />
        <Route exact path="/stopwatch" element={<Stopwatch/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/ref" element={<Ref/>} />
        <Route path="/bform" element={<Bform/>} />
        <Route path="/fancyform" element={<Fancyform/>} />
        <Route path="/listitem" element={<Listitem/>} />
     </Routes>
    </div>
  );
}

export default App;
