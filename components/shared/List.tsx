import { Response } from '@/types/types';
import CarCard from './CarCard';

interface IList {
  data: Response;
}

export default function List({ data }: IList) {
  const cars = data.data;

  return (
    <section>
      <ul className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cars.map(car => (
          <CarCard key={car.unique_id} data={car} />
        ))}
      </ul>
    </section>
  );
}
