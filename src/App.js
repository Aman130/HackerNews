import React,{useState} from 'react'
import './App.css';

import Navbar from './components/Navbar'
import Filters from './components/Filters/Filters';
import News from './components/News/News';

import {FilterProvider} from './context/filter-context';

function App() {
  const [feed,setFeed]=useState([]);
  const newsItems=(items)=>{
      console.log(items.hits);
      setFeed(items.hits);
  }
  return (
    <div className="m-auto w-5/6">
      <FilterProvider>
        <Navbar />
        <Filters getNewsItems={newsItems}/>
        <News items={feed}/>
      </FilterProvider>
    </div>
  );
}

export default App;
