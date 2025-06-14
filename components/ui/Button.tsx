import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  icon?: React.ReactNode
  design?: 'gray' | 'blue'
  extraClass?: string
}

export default function Button({
  label,
  icon,
  design = 'blue',
  extraClass,
  ...props
}: Props) {
  let designClasses
  switch (design) {
    case 'gray':
      designClasses =
        'bg-blue-100 text-black hover:bg-blue-500 hover:text-white'
      break
    case 'blue':
      designClasses = 'bg-blue-700 text-white hover:bg-blue-500'
      break
  }

  return (
    <button
      {...props}
      className={`flex justify-center items-center text-center gap-[5px] w-fit px-4 py-1 xs:h-[36px] sm:h-[40px] rounded-[10px] text-[15px] leading-[16px] ${designClasses} font-semibold transition-all ease-out cursor-pointer ${extraClass}`}
    >
      {icon && <div className="shrink-0">{icon}</div>}
      {label && <p>{label}</p>}
    </button>
  )
}
