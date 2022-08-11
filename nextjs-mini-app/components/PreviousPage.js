const PreviousPage = ({ setPage, page }) => {
  return (
    <button
      onClick={() => setPage((old) => Math.max(old - 1, 0))}
      disabled={page === 0}
    >
      Previous Page
    </button>
  );
};

export default PreviousPage;
