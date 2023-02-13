import React from 'react'

const FooterNewsItems=()=>{
    return (
        <div>
            <ul className='flex flex-row flex-wrap justify-center items-center text-[12px] mt-10 mb-10 list-disc'>
                <li className='mr-[24px] bullet list-none'>
                    About
                </li>
                <li className='mr-[24px]'>
                    Settings
                </li>
                <li className='mr-[24px]'>
                    Help
                </li>
                <li className='mr-[24px]'>
                    API documentation
                </li>
                <li className='mr-[24px]'>
                    Hacker News
                </li>
                <li className='mr-[24px]'>
                    Fork/Contribute
                </li>
                <li className='mr-[24px]'>
                    Cool Apps
                </li>
            </ul>
        </div>
    )
}

export default FooterNewsItems