import React,{useContext} from 'react'
import {FilterContext} from '../../context/filter-context'
const Pagination=()=>{

    const [filter,setFilter]=useContext(FilterContext)
    const onClickPreviousHandler=()=>{
        if(filter.page>0){
            setFilter((prevState)=>{
                return {
                    ...prevState,
                    page: prevState.page-1,
                }
            })
        }
    }

    const onClickNextHandler=()=>{
        setFilter((prevState)=>{
            return {
                ...prevState,
                page: prevState.page+1,
            }
        })
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button onClick={onClickPreviousHandler} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                        Previous
                    </button>
                </li>
                <li>
                    <button href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                        {filter.page+1}
                    </button>
                </li>
                <li>
                    <button  onClick={onClickNextHandler} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination