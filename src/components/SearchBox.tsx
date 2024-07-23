import { ChangeEvent } from "react";

type SearchBoxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div
      className="pa2 flex items-center justify-center"
      style={{ height: "10vh", minHeight: "80px" }}
    >
      <input
        className="ph3 pv2 ba br3 b--dark-blue bg-washed-yellow"
        type="search"
        placeholder="Search Pokémons"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
