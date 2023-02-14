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
        <div className='w-full h-10 flex flex-row items-center' style={{ backgroundColor: "#f6f6ef" }}>
            <div className="text-xs ml-2 mr-2">Search</div>
            <FilterItems dropdown={onDropdownChangeHandler} filter={filterArray[0]}/>
            <div className="text-xs ml-2 mr-2">by</div>
            <FilterItems dropdown={onDropdownChangeHandler} filter={filterArray[1]} />
            <div className="text-xs ml-2 mr-2">for</div>
            <FilterItems dropdown={onDropdownChangeHandler} filter={filterArray[2]}/>
        </div>
    )
}

export default Filters

