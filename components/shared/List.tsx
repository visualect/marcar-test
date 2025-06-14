import { Response } from '@/types/types'
import CarCard from './CarCard'

interface IList {
  data: Response
}

export default function List({ data }: IList) {
  const cars = data.data
  const meta = data.meta

  return (
    <section>
      <div></div>
      <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cars.map((car) => (
          <CarCard key={car.unique_id} data={car} />
        ))}
      </ul>
    </section>
  )
}
