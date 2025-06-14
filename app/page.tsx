import List from '@/components/shared/List'
import Pagination from '@/components/shared/Pagination'
import Sorting from '@/components/shared/Sorting'
import { Response } from '@/types/types'

export default async function Home() {
  const data = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + '/cars?_limit=12?_page=1'
  )
  const response: Response = await data.json()

  return (
    <main className="w-full max-w-[1200px] py-4 px-2 mx-auto my-0">
      <div className="flex flex-col gap-14">
        <Sorting />
        <List data={response} />
        <Pagination />
      </div>
    </main>
  )
}
