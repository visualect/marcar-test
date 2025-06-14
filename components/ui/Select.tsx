import * as React from "react";
import { Select as SelectPrimitive } from "radix-ui";
import { IoIosArrowDown } from "react-icons/io";

interface ISelect {
  value: string;
  onChange: (newVal: string) => void;
  placeholder?: string;
  defaultValue?: string;
  children: React.ReactNode;
}

export function Select({
  children,
  value,
  onChange,
  defaultValue,
  placeholder = "Выберите значение",
}: ISelect) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={(newVal) => onChange(newVal)}
      open={open}
      onOpenChange={setOpen}
      defaultValue={defaultValue}
    >
      <SelectPrimitive.Trigger className="flex items-center justify-between gap-2 py-[8px] px-[14px] bg-white h-[35px] rounded-c-medium w-full !text-[13px]  border border-gray-200 focus:outline-none">
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon
          className={`${open && "rotate-180"} transition-transform`}
        >
          <IoIosArrowDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          className="overflow-hidden rounded-c-medium bg-white shadow-md"
        >
          <SelectPrimitive.Viewport className="p-[5px] transition-transform duration-300">
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {
  children: React.ReactNode;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={
          "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none ease-out transition-colors"
        }
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  },
);
