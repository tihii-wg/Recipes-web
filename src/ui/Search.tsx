import type { SearcProps } from "../types/types";

export default function Search({ inputSearch, setInputSearch }: SearcProps) {
  return (
    <input
      value={inputSearch}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputSearch(e.target.value)
      }
      className="searchInput"
      type="text"
      placeholder="Search book..."
    />
  );
}
