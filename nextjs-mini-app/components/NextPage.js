const NextPage = ({ setPage, data, isPreviousData }) => {
  return (
    <button
      onClick={() => {
        setPage((old) => (data?.hasMore ? old + 1 : old));
      }}
      disabled={isPreviousData || !data?.hasMore}
    >
      Next Page
    </button>
  );
};

export default NextPage;
