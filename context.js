import React, {createContext, useState, useContext} from 'react';

// Create the context
const FilterContext = createContext();

// Create a provider component
export const FilterProvider = ({children}) => {
  const [dietFilter, setDietFilter] = useState([]);
  const [cuisineFilter, setCuisineFilter] = useState([]);
  const [protienFilter, setProtienFilter] = useState([]);

  return (
    <FilterContext.Provider
      value={{
        dietFilter,
        setDietFilter,
        cuisineFilter,
        setCuisineFilter,
        protienFilter,
        setProtienFilter,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

// Create a custom hook to use the filter context
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
