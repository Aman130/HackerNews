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
        <div className='bg-orange-500 h-16 flex flex-row items-center'>
            <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" className='h-12 ml-8'/>
            <div className='hidden md:block lg:block w-32 ml-4 font-medium text-xl tracking-wide'>
                Search Hacker News
            </div>
            <div className='grow h-12 mr-10'>
                <input className='w-full h-[3rem] rounded-md ml-8 p-3' type="text" placeholder="Search Stories" onChange={onChangeHandler}/>
            </div>
        </div>
    )
}

export default Navbar

