import { ChangeEvent } from "react";

type SearchBoxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void
};

const SearchBox = ({searchChange}: SearchBoxProps) => {
   return (
      <div className="pa2 mb3">
         <input 
            className="pa3 ba br4 b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange} 
         />
      </div>
   )
}

export default SearchBox;