import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export type SelectItem = {
  id: string;
  name: string;
};

export default function CustomSelect({
  param,
  label,
  options,
  placeholder,
}: {
  param: string;
  label?: string;
  options: SelectItem[];
  placeholder: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState<SelectItem | null>(null);

  const selectedId = searchParams.get(param);
  useEffect(() => {
    if (!selectedId) {
      return;
    }

    const selectedItem = options.find((option) => option.id === selectedId);
    if (selectedItem) {
      setSelected(selectedItem);
    } else {
      setSearchParams((params) => {
        params.delete(param);
        return params;
      });
    }
  }, [options, param, selectedId, setSearchParams]);

  useEffect(() => {
    if (selected) {
      setSearchParams((params) => {
        params.set(param, selected.id);
        return params;
      });
    } else {
      setSearchParams((params) => {
        params.delete(param);
        return params;
      });
    }
  }, [param, selected, setSearchParams]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {label && (
          <Label className="block text-sm/6 font-medium text-gray-900">
            {label}
          </Label>
        )}

        <div className="relative mt-2">
          <ListboxButton className="relative w-48 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6">
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {selected ? selected.name : placeholder}
              </span>
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="size-5 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {option.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
