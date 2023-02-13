import React,{useState} from 'react'
import './App.css';

import Navbar from './components/Navbar'
import Filters from './components/Filters/Filters';
import News from './components/News/News';
import FooterNewsItems from './components/Footer/FooterNewsItems'

import {FilterProvider} from './context/filter-context';

function App() {
  const styles = {
    width: 'calc(85% - 10px)',
  };
  const [feed,setFeed]=useState([]);
  const [nbPages,setnbPages]=useState(0)
  const newsItems=(items)=>{
      setnbPages(items.nbPages)
      setFeed(items.hits);
  }

  return (
    <div className="overflow-hidden m-auto font-['Verdana']" style={styles}>
      <FilterProvider>
        <Navbar />
        <Filters getNewsItems={newsItems}/>
        <News nbPages={nbPages} items={feed}/>
        <FooterNewsItems/>
      </FilterProvider>
    </div>
  );
}

export default App;
