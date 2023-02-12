import React from 'react'
import NewsItems from './NewsItems'
import Comment from './Comment'
import Pagination from '../Pagination/Pagination'

const News = (props) => {
    console.log(props.nbPages)
    const newsItems = props.items.map((items) => {
        return items.comment_text == null ?
            <NewsItems className="mr-10" key={(Math.floor(Math.random() * 100000)).toString()} item={items} /> :
            <Comment className="mr-10" key={(Math.floor(Math.random() * 100000)).toString()} item={items} />
    });

    return (
        <>
            <div className='bg-gray-100'>
                <div className='mr-10'>
                    {newsItems}
                    <div className='flex justify-center'>
                        <Pagination nbPages={props.nbPages} className='flex justify-center' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default News

