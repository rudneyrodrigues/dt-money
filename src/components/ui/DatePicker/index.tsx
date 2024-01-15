import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Dispatch, SetStateAction } from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'

import { Button } from '../Button'
import { Calendar } from '../Calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../Popover'

interface DatePickerProps {
  date: Date | undefined
  setDate: Dispatch<SetStateAction<Date | undefined>>
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger className="w-full" asChild>
        <Button size="lg" variant="secondary" className="w-full">
          <CalendarIcon />
          {date ? (
            format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
          ) : (
            <span>Selecione uma data</span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Calendar
          initialFocus
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) =>
            date > new Date() || date < new Date('1900-01-01')
          }
        />
      </PopoverContent>
    </Popover>
  )
}
