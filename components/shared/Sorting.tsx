'use client'

import { Meta } from '@/types/types'
import { Option, Select } from '../ui/Select'
import { GrAscend } from 'react-icons/gr'
import { GrDescend } from 'react-icons/gr'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface ISorting {
  meta: Meta
}

const SORTING_OPTIONS = [
  {
    name: 'desc',
    label: 'По убыванию',
    icon: <GrDescend />,
  },
  {
    name: 'asc',
    label: 'По возрастанию',
    icon: <GrAscend />,
  },
  {
    name: 'unassigned',
    label: 'Не выбрано',
  },
]

export default function Sorting({ meta }: ISorting) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pushQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'unassigned') {
      params.delete(name)
    } else {
      params.set(name, value)
    }
    router.push(pathname + `?${params.toString()}`)
  }

  return (
    <div className="w-full flex justify-between items-center gap-4">
      <p className="font-medium text-sm">Найдено: {meta.count}</p>
      <Select
        align="end"
        sideOffset={2}
        position="popper"
        placeholder="Сортировать по"
        defaultValue={searchParams.get('order')?.toString()}
        onValueChange={(newVal) => pushQueryString('order', newVal)}
      >
        {SORTING_OPTIONS.map((opt) => (
          <Option key={opt.name} value={opt.name}>
            <p className="flex items-center gap-2">
              {opt.icon && opt.icon}
              {opt.label}
            </p>
          </Option>
        ))}
      </Select>
    </div>
  )
}
