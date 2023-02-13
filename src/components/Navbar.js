import React, { useContext} from 'react'
import { FilterContext } from '../context/filter-context'

const Navbar = () => {
    const [filter,setFilter]=useContext(FilterContext)

    const onChangeHandler=(event)=>{
        setFilter((prevState)=>({
            ...prevState,
            query: event.target.value
        }))
    }
    
    return (
        <div className='bg-orange-500 h-[3.7rem] flex flex-row items-center'>
            <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" className='h-12 ml-2'/>
            <div className='hidden md:block lg:block w-32 ml-2 font-medium text-lg tracking-wide leading-4	'>
                Search
                <br/>
                Hacker News
            </div>
            <div className='grow h-12 mr-10 flex justify-center items-center'>
                {/* <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </span> */}
                <input className='placeholder-gray-500 w-full h-[2.5rem] ml-2 p-3' type="text" placeholder="Search stories by title, url or author" onChange={onChangeHandler}/>
            </div>
            <div>
                <img src={require('./settings-3110.png')} className="h-[25px] mr-2"/>
            </div>
            <div className="mr-5">
                
                Settings
            </div>
        </div>
    )
}

export default Navbar

