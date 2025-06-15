import List from '@/components/shared/List';
import Pagination from '@/components/shared/Pagination';
import Sorting from '@/components/shared/Sorting';
import { Response } from '@/types/types';
import { Suspense } from 'react';

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
    order?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const order = searchParams?.order || '';
  const currentPage = Number(searchParams?.page) || 1;

  let url =
    process.env.NEXT_PUBLIC_BACKEND_URL +
    `/cars?_limit=12&_page=${currentPage}`;

  if (order) {
    url += `&_sort=price&_order=${order}`;
  }

  const data = await fetch(url);
  const response: Response = await data.json();

  return (
    <main className="mx-auto my-0 w-full max-w-[1200px] px-2 py-4">
      <div className="flex flex-col gap-14">
        <Sorting meta={response.meta} />
        <Suspense key={order + currentPage}>
          <List data={response} />
        </Suspense>
        <Pagination meta={response.meta} />
      </div>
    </main>
  );
}
