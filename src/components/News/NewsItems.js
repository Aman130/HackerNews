import React from 'react'
import moment from 'moment';
import parse from 'html-react-parser';

const NewsItems = (props) => {
    return (
        <div className='h-auto ml-4 text-sm mb-1'>
            <div className='font-light overflow-hidden'>
                {props.item.title}
                {props.item.url!=null && (<a href={props.item.url} style={{color:'#828282'}} className="text-[13px] no-underline hover:underline text-zinc-400"> ({props.item.url})</a>)} 
            </div>
            <div className='text-[10px] text-gray-500 tracking-[0.030rem]'>
                {props.item.points} points | {props.item.author} | {moment(props.item.created_at_i*1000).fromNow()} | {props.item.num_comments} comments
            </div>
            <div>
                {(props.item.story_text!=null && <p className='text-[12px]'>{parse (props.item.story_text)}</p>)}
            </div>
        </div>
    )
}

export default NewsItems

