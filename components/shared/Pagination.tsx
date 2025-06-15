'use client'

import { Meta } from '@/types/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'

interface IPagination {
  meta: Meta
}

export default function Pagination({ meta }: IPagination) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pushQueryString = (name: string, value: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 1) {
      params.delete(name)
    } else {
      params.set(name, String(value))
    }
    router.push(pathname + `?${params.toString()}`)
  }

  const totalPages = Math.ceil(meta.total / meta.count)

  const pageNumbers = useMemo(() => {
    const range = 2
    const pages: (number | string)[] = [1]

    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, idx) => idx + 1)

    if (meta.page - range > 2) pages.push('...')

    for (
      let i = Math.max(2, meta.page - range);
      i <= Math.min(totalPages - 1, meta.page + range);
      i++
    ) {
      pages.push(i)
    }

    if (meta.page + range < totalPages - 1) pages.push('...')
    if (totalPages > 1) pages.push(totalPages)

    return pages
  }, [meta.page, totalPages])

  const handleNextPage = () => {
    if (meta.page < totalPages) pushQueryString('page', meta.page + 1)
  }

  const handlePrevPage = () => {
    if (meta.page > 0) pushQueryString('page', meta.page - 1)
  }

  return (
    <div className="flex justify-center gap-2 w-full py-4">
      <button
        className="flex justify-center items-center rounded-[10px] aspect-square p-2 bg-blue-700 text-white h-[40px] cursor-pointer"
        onClick={handlePrevPage}
      >
        <RiArrowLeftSLine />
      </button>
      <ul className="flex gap-2">
        {pageNumbers.map((num, idx) => {
          if (typeof num === 'string') {
            return (
              <p className="self-end" key={num + idx}>
                ...
              </p>
            )
          } else {
            return (
              <button
                className={`flex justify-center items-center h-[40px] ${num === meta.page ? 'bg-blue-700 text-white hover:bg-blue-500' : 'bg-transparent text-blue-700 border border-blue-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white'} rounded-[10px] aspect-square p-2 font-medium ease-out transition-colors text-sm  cursor-pointer`}
                onClick={() => pushQueryString('page', num)}
                key={num}
              >
                {num}
              </button>
            )
          }
        })}
      </ul>
      <button
        className="flex justify-center items-center rounded-[10px] aspect-square p-2 bg-blue-700 text-white h-[40px] cursor-pointer"
        onClick={handleNextPage}
      >
        <RiArrowRightSLine />
      </button>
    </div>
  )
}
