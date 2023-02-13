import React from 'react'
import NewsItems from './NewsItems'
import Comment from './Comment'
import Pagination from '../Pagination/Pagination'

const News = (props) => {
    const newsItems = props.items.map((items) => {
        return items.comment_text == null ?
            <NewsItems key={(Math.floor(Math.random() * 100000)).toString()} item={items} /> :
            <Comment key={(Math.floor(Math.random() * 100000)).toString()} item={items} />
    });

    return (
        <>
            <div style={{ backgroundColor: "#f6f6ef" }}>
                <div className='mr-1'>
                    {newsItems}
                    <Pagination nbPages={props.nbPages}/>
                </div>
            </div>
        </>
    )
}

export default News

