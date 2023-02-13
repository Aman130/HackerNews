import React from 'react'

const FilterItems = (props) => {

    const options = props.filter.map((element) => <option value={element} key={element}>{element}</option>);
    return (
        <div>
            <select onChange={props.dropdown} style={{ backgroundColor: "#f6f6ef" }} className="text-gray-500 text-sm block mt-6 p-[3px] mb-6 text-sm border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
            {
                options
            }
            </select>
        </div>
    )
}

export default FilterItems

