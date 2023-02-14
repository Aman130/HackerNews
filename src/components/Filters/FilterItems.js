import React,{useEffect,useRef} from 'react'

const FilterItems = (props) => {
    const selectRef = useRef(null);
    const testerRef = useRef(null);

    useEffect(() => {
        const select = selectRef.current;
        const tester = testerRef.current;

        select.addEventListener("change", () => {
        const opt = select.selectedOptions[0];

        tester.style.fontFamily = opt.style.fontFamily;
        tester.style.fontStyle = opt.style.fontStyle;
        tester.style.fontWeight = opt.style.fontWeight;
        tester.style.fontSize = opt.style.fontSize;
        tester.textContent = opt.textContent;

        select.style.width = `${tester.offsetWidth + 30}px`;
        });

        select.dispatchEvent(new Event("change"));
    }, [])

    const options = props.filter.map((element) => <option value={element} key={element}>{element}</option>);
    return (
        <div>
            <select ref={selectRef} onChange={props.dropdown} style={{backgroundColor: "#f6f6ef" }} className="outline-none form-select text-gray-500 text-sm p-[2px] border border-gray-300 bg-gray-50">
            {
                options 
            }
            </select>
            <span ref={testerRef} className="tester" style={{ position: "absolute", left: -9999 }} />
        </div>
    )
}

export default FilterItems

