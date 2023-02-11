import React from 'react'
import moment from 'moment';
import parse from 'html-react-parser';

const NewsItems = (props) => {
    return (
        <div className='h-auto ml-4 mb-4'>
            <div className='font-semibold overflow-hidden'>
                {props.item.title} {props.item.url!=null && (<a href={props.item.url} className="no-underline hover:underline text-zinc-400 text-base">({props.item.url})</a>)} 
            </div>
            <div className='text-[11.6667px] text-zinc-400'>
                {props.item.points} points by {props.item.author} | {moment(props.item.created_at_i*1000).fromNow()} | {props.item.num_comments} comments | hide | past | discuss
            </div>
            <div>
                {(props.item.story_text!=null && <p className='text-[12.6667px]'>{parse (props.item.story_text)}</p>)}
            </div>
        </div>
    )
}

export default NewsItems

