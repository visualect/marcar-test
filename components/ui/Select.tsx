import * as React from 'react';
import { Select as SelectPrimitive } from 'radix-ui';
import { IoIosArrowDown } from 'react-icons/io';

type ISelect = {
  extraClass?: string;
  placeholder: string;
  align?: 'center' | 'end' | 'start';
  position?: 'popper' | 'item-aligned';
  sideOffset?: number;
} & React.ComponentProps<typeof SelectPrimitive.Root>;

export function Select({
  extraClass = '',
  placeholder,
  children,
  align,
  position,
  sideOffset,
  ...props
}: ISelect) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectPrimitive.Root open={open} onOpenChange={setOpen} {...props}>
      <SelectPrimitive.Trigger
        className={`flex h-[40px] w-fit items-center justify-between gap-2 rounded-[10px] border border-gray-100 bg-white px-4 py-1 !text-[15px] focus:outline-none ${extraClass}`}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon
          className={`${open && 'rotate-180'} transition-transform`}
        >
          <IoIosArrowDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          sideOffset={sideOffset}
          align={align}
          position={position}
          className="z-10 overflow-hidden rounded-[10px] bg-white shadow-md"
        >
          <SelectPrimitive.Viewport className="p-[5px] transition-transform duration-300">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

interface IOptionProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {
  children: React.ReactNode;
}

export const Option = React.forwardRef<HTMLDivElement, IOptionProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={
          'relative flex items-center rounded-[6px] px-4 py-2 text-xs leading-none transition-colors ease-out select-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none'
        }
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);
