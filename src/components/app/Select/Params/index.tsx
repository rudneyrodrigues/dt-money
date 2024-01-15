import { Dispatch, SetStateAction } from 'react'

import {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '@/components/ui/Select'

interface SelectParamsProps {
  params: {
    value: string
    title: string
  }[]
  setFilterParam: Dispatch<SetStateAction<string[]>>
}

export function SelectParams({ params, setFilterParam }: SelectParamsProps) {
  return (
    <Select
      defaultValue={params[0].value}
      onValueChange={(e) => setFilterParam([e])}
    >
      <SelectTrigger className="h-10 sm:h-12">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filtros</SelectLabel>

          {params.map((param) => (
            <SelectItem key={param.value} value={param.value}>
              {param.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
