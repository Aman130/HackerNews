import React,{useState,useContext} from 'react'
import {FilterContext} from '../../context/filter-context'

const Pagination=(props)=>{
    const [filter,setFilter]=useContext(FilterContext)
    var pageArray=[];
    var currPage=parseInt(filter.page)
    
    var tempPage=currPage;
    var cnt=0;

    while(tempPage>=0 && cnt<6){
        pageArray.push(tempPage);
        cnt++;
        tempPage-=1;
    }

    pageArray.reverse();
    
    tempPage=currPage+1;
    while(tempPage<Math.min(props.nbPages,currPage+6)){
        pageArray.push(tempPage);
        tempPage+=1;
    }

    const onClickPreviousHandler=()=>{
        if(filter.page>0){
            setFilter((prevState)=>{
                return {
                    ...prevState,
                    page: 0,
                }
            })
        }
    }

    const onClickHandler=(event)=>{
        const page=event.target.value
        setFilter((prevState)=>{
            return {
                ...prevState,
                page: page
            }
        })
    }

    const onClickNextHandler=()=>{
        if(filter.page<props.nbPages-1){
            setFilter((prevState)=>{
                return {
                    ...prevState,
                    page: props.nbPages-1,
                }
            })
        }
    }
    const pageIcons= pageArray.map((element) => <li><button value={element} onClick={onClickHandler} className={`${element==currPage ? 'border-[#ff742b]' : 'border-gray-400'} border-[1px] text-[12px] text-[#9d9d9d] rounded-sm justify-center items-center m-[2px] w-[30px] h-[24px] `}>{element+1}</button></li>);

    return (
        <div className='mb-2'>
            <ul className="flex flex-wrap items-center justify-center">
                {currPage!=0 &&
                <li className="border-[1px] text-[12px] rounded-sm text-[#9d9d9d] justify-center items-center m-[2px] w-[30px] h-[24px] border-2 border-gray-400">
                    <button onClick={onClickPreviousHandler}>&lt;&lt;</button>
                </li>}
                {
                    pageIcons
                }
                {currPage+1!=props.nbPages &&
                <li className="border-[1px] text-[12px] rounded-sm text-[#9d9d9d] justify-center items-center m-[2px] w-[30px] h-[24px] border-2 border-gray-400">
                    <button  onClick={onClickNextHandler}>&gt;&gt;</button>
                </li>}
            </ul>
        </div>
    );
}

export default Pagination