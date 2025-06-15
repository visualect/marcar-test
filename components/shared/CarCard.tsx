import { Car } from '@/types/types'
import PhotoSwiper from './PhotoSwiper'
import { IoCarOutline } from 'react-icons/io5'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { TbManualGearboxFilled } from 'react-icons/tb'
import { VscColorMode } from 'react-icons/vsc'
import { BsFuelPump } from 'react-icons/bs'
import { CiCalendar } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'
import { RiScalesLine } from 'react-icons/ri'
import { formatNumber } from '@/utils/format'
import Button from '../ui/Button'

interface ICarCard {
  data: Car
}

export default function CarCard({ data }: ICarCard) {
  return (
    <li className="col-span-1 flex flex-col gap-2 p-5 rounded-3xl bg-transparent hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.1)] transition-shadow ease-out overflow-hidden">
      <PhotoSwiper
        images={data.images.image}
        bookingAllowed={data.booking_allowed}
      />
      <div className="flex flex-col">
        <h3 className="font-bold text-lg cursor-pointer">{data.mark_id}</h3>
        <div className="flex items-center gap-2 pb-2">
          <p className="font-semibold">{formatNumber(data.price, '₽')}</p>
          {data.credit_discount && (
            <p className="text-xs font-semibold text-gray-500">
              от {formatNumber(data.credit_discount, '₽')}/мес
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 pb-4 text-xs text-gray-900">
          <p className="flex gap-1 items-center">
            <IoCarOutline />
            {data.modification_id}
          </p>
          <div className="flex gap-2 items-center">
            <p className="flex gap-1 items-center">
              <IoSpeedometerOutline />
              {formatNumber(data.run, 'км')}
            </p>
            <p className="flex gap-1 items-center">
              <TbManualGearboxFilled />
              {data.gearbox}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="flex gap-1 items-center">
              <BsFuelPump />
              {data.engine_type}
            </p>
            <p className="flex gap-1 items-center">
              <VscColorMode />
              {data.color}
            </p>
            <p className="flex gap-1 items-center">
              <CiCalendar />
              {data.year}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
          <div className="flex gap-2 w-full">
            <Button
              extraClass="aspect-square w-full md:w-fit"
              design="gray"
              icon={<CiHeart size={18} />}
            />
            <Button
              extraClass="aspect-square w-full md:w-fit"
              design="gray"
              icon={<RiScalesLine size={18} />}
            />
          </div>
          <Button label="Купить" extraClass="w-full md:w-fit" />
        </div>
      </div>
    </li>
  )
}
