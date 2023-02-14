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
            <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" className='w-[48px] h-12 p-0 mb-[3px] ml-1'/>
            <div className='hidden md:block lg:block w-32 ml-2 font-medium text-lg leading-[1.125rem]	'>
                Search
                <br/>
                Hacker News
            </div>
            <div className='grow mr-[37px] ml-[6px]'>
                <div className='flex items-center bg-white border-[1px] h-[42px]'>
                    <span>
                        <svg className="stroke-current text-orange-500 ml-[12px] bg-white" xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </span>
                    <input className='py-[16px] px-[16px] pr-[144px] pl-[18px] placeholder-gray-500 w-full h-full' type="text" placeholder="Search stories by title, url or author" onChange={onChangeHandler}/>
                </div>
            </div>
            <div>
                <img src={require('./settings-3110.png')} className="h-[22px] mr-2"/>
            </div>
            <div className="mr-1">
                Settings
            </div>
        </div>
    )
}

export default Navbar

