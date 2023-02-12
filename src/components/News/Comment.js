import React from 'react'
import moment from 'moment';
import parse from 'html-react-parser';

const NewsItems = (props) => {
    return (
        <div className='h-auto ml-4 mb-4'>
            <div className='text-[11.6667px] text-zinc-400'>
                {props.item.author} | {moment(props.item.created_at_i*1000).fromNow()} | parent | on: <a href={props.item.story_url} className="no-underline hover:underline">{props.item.story_title}</a>
            </div>
            <div className='text-[12.6667px] overflow-hidden'>
                {parse (props.item.comment_text)}
            </div>
        </div>
    )
}

export default NewsItems

