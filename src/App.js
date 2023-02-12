import React,{useState} from 'react'
import './App.css';

import Navbar from './components/Navbar'
import Filters from './components/Filters/Filters';
import News from './components/News/News';

import {FilterProvider} from './context/filter-context';

function App() {
  const [feed,setFeed]=useState([]);
  const [nbPages,setnbPages]=useState(0)
  const newsItems=(items)=>{
      setnbPages(items.nbPages)
      setFeed(items.hits);
  }

  return (
    <div className="m-auto w-5/6">
      <FilterProvider>
        <Navbar />
        <Filters getNewsItems={newsItems}/>
        <News nbPages={nbPages} items={feed}/>
      </FilterProvider>
    </div>
  );
}

export default App;
