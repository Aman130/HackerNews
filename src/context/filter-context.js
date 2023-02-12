import React, { createContext,useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialFilterState={
    query:"",
    tag:"(story,comment)",
    sortBy:"Date",
    sortFrom:"All Time",
    page:0,
    nbPage:0
  }

  const [filterState,setFilterState] = useState(initialFilterState); 

  const data = [filterState,setFilterState];

  return <FilterContext.Provider value={data}>{children}</FilterContext.Provider>;
};