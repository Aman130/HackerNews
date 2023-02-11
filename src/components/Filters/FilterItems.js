import React from 'react'

const FilterItems = (props) => {

    const options = props.filter.map((element) => <option value={element} key={element}>{element}</option>);
    return (
        <div>
            <select id="small" onChange={props.dropdown} className="block w-full mt-6 p-1 mb-6 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
            {
                options
            }
            </select>
        </div>
    )
}

export default FilterItems

