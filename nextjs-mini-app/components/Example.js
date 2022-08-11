import React from 'react';
import axios from 'axios';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { useEffect, useState } from 'react';

import PaginationLoading from './PaginationLoading';
import PreviousPage from './PreviousPage';
import CurrentPage from './CurrentPage';
import NextPage from './NextPage';

import ProjectItemList from './ProjectItemList';

const queryClient = new QueryClient();

async function fetchProjects(page = 0) {
  const { data } = await axios.get('/api/projects?page=' + page);
  return data;
}

function Example() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);

  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ['projects', page],
    () => fetchProjects(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () =>
        fetchProjects(page + 1)
      );
    }
  }, [data, page, queryClient]);

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') return <span>Error: {error.message}</span>;

  return (
    <div>
      <ProjectItemList data={data}></ProjectItemList>
      <CurrentPage page={page}></CurrentPage>
      <PreviousPage setPage={setPage} page={page}></PreviousPage>{' '}
      <NextPage
        setPage={setPage}
        data={data}
        isPreviousData={isPreviousData}
      ></NextPage>
      <PaginationLoading isFetching={isFetching}></PaginationLoading>
    </div>
  );
}

export default Example;
