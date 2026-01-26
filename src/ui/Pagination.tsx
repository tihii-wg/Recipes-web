import Button from "./Button";

export default function Pagination() {
  return (
    <div className="pagination-container">
      <p>
        Showing <span>1 </span>
        to <span>10</span> recipes.
      </p>
      <div className="pagination-buttons">
        <Button>
          <span>Previos</span>
        </Button>
        <Button>
          <span>Next</span>
        </Button>
      </div>
    </div>
  );
}
