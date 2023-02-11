import React, { useContext, useEffect } from 'react'
import FilterItems from './FilterItems'
import { FilterContext } from '../../context/filter-context'
import getItems from '../../api/api'

const Filters = (props) => {
    const filterArray =[
        ["All","Stories","Comments"],
        ["Date","Popularity"],
        ["All Time","Last 24h","Past Week","Past Month","Past Year"]
    ]

    const [filter,setFilter]=useContext(FilterContext)
    
    useEffect(()=>{
        console.log(filter);
        getItems(filter)
        .then((data)=>{
            props.getNewsItems(data)
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[filter.query,filter.tag,filter.sortFrom,filter.page,filter.sortBy])


    const onDropdownChangeHandler=(event)=>{
        var value=event.target.value;
        if(value==="All" || value==="Stories" || value==="Comments"){
            if(value==="All") value="(story,comment)";
            else if(value==="Stories") value="story";
            else value="comment";
            setFilter((prevState)=>({
                ...prevState,
                tag: value
            }));
        }
        else if(value==="Popularity" || value==="Date"){
            setFilter((prevState)=>({
                ...prevState,
                sortBy: value
            }));
        }
        else{
            setFilter((prevState)=>({
                ...prevState,
                sortFrom: value
            }));
        }

    }
    return (
        <div className='bg-gray-100 h-16 flex flex-row items-center '>
            <h1 className="ml-2 mr-2">Search</h1>
            <FilterItems dropdown={onDropdownChangeHandler} filter={filterArray[0]}/>
            <h1 className="ml-2 mr-2">by</h1>
            <FilterItems dropdown={onDropdownChangeHandler} filter={filterArray[1]} />
            <h1 className="ml-2 mr-2">for</h1>
            <FilterItems dropdown={onDropdownChangeHandler} filter={filterArray[2]}/>
        </div>
        
    )
}

export default Filters

