import { useSearchParams } from "react-router";
import Button from "./Button";

export default function Pagination({ recipes, pagination }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { limit, setLimit } = pagination;

  const totalRecipes = recipes.total;

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(totalRecipes / limit);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

 

  return (
    <div className="pagination-container">
      <p>
        Showing
        <select
          value={limit}
          onChange={(e) => {
            setLimit(e.target.value);
            searchParams.set("page", 1);
            setSearchParams(searchParams);
          }}
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
        from <span>{(currentPage - 1) * limit + 1} </span>
        to {currentPage === pageCount
          ? totalRecipes
          : currentPage * limit} of <span>{recipes.total}</span> results
      </p>
      <div className="pagination-buttons">
        <Button onClick={prevPage}>
          <span>Previos</span>
        </Button>
        <Button onClick={nextPage}>
          <span>Next</span>
        </Button>
      </div>
    </div>
  );
}
