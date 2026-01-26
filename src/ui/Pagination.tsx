import Button from "./Button";

export default function Pagination() {
  return (
    <div className="pagination-container">
      <p>
        Showinh <span>1</span>
        to <span>10</span> of <span>50</span> results
      </p>
      <Button>
        <span>Previos</span>
      </Button>
      <Button>
        <span>Next</span>
      </Button>
    </div>
  );
}
