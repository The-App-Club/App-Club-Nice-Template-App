const PaginationLoading = ({ isFetching }) => {
  return isFetching ? <span> Loading...</span> : null;
};

export default PaginationLoading;
