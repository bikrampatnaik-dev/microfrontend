import React, { Fragment } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BookmarkIcon,
  CalendarIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  Pencil2Icon,
} from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/utils';
import {
  Badge,
  Button,
  Calendar,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  toast,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared-react';

const FormSchema = z.object({
  startDate: z.date({}),
  startTime: z.date({}),
  startTimezone: z.date({}),
  endtDate: z.date({}),
  endtTime: z.date({}),
  endTimezone: z.date({}),
});

export default function DateSearch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
    });
  }
  return (
    <Fragment>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex items-center"
        >
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <Select>
                <SelectTrigger className="w-[180px] mr-2 h-100">
                  <SelectValue placeholder="Choose a Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Range</SelectLabel>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="24D">24H</SelectItem>
                    <SelectItem value="30D">30D</SelectItem>
                    <SelectItem value="60D">60D</SelectItem>
                    <SelectItem value="90D">90D</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="p-0 h-full !m-0">
                    <Badge className="rounded-none bg-[#834eef] hover:bg-[#834eef]">
                      {format(field.value ? field.value : new Date(), 'PPP')}
                      <CalendarIcon className="ml-2" />
                    </Badge>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="p-0 h-full !m-0">
                    <Badge className="rounded-none bg-[#4aabc2] hover:bg-[#4aabc2]">
                      {format(
                        field.value ? field.value : new Date(),
                        'hh:mm:ss a'
                      )}
                      <CalendarIcon className="ml-2" />
                    </Badge>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <Button className="p-0 h-full !m-0 rounded-none">
                <Badge className="!rounded-none" variant={'secondary'}>
                  {format(field.value ? field.value : new Date(), 'z')}
                </Badge>
              </Button>
            )}
          />
          <div className="inline-flex px-2 !m-0 self-center">
            <ClockIcon />
          </div>{' '}
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="p-0 h-full !m-0">
                    <Badge className="rounded-none bg-[#834eef] hover:bg-[#834eef]">
                      {format(field.value ? field.value : new Date(), 'PPP')}
                      <CalendarIcon className="ml-2" />
                    </Badge>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="p-0 h-full !m-0">
                    <Badge className="rounded-none bg-[#4aabc2] hover:bg-[#4aabc2]">
                      {format(
                        field.value ? field.value : new Date(),
                        'hh:mm:ss a'
                      )}
                      <CalendarIcon className="ml-2" />
                    </Badge>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <Button className="p-0 h-full !m-0 rounded-none">
                <Badge className="!rounded-none" variant={'secondary'}>
                  {format(field.value ? field.value : new Date(), 'z')}
                </Badge>
              </Button>
            )}
          />
        </form>
      </Form>
      <Button
        className="hover:cursor-pointer ml-2"
        variant="default"
        size={'icon'}
        onClick={() => console.log('bookmark clicked')}
      >
        <MagnifyingGlassIcon />
      </Button>
      <Button
        className="ml-2 hover:cursor-pointer relative"
        variant="outline"
        size={'icon'}
        onClick={() => console.log('bookmark clicked')}
      >
        <BookmarkIcon />
        <span
          className="absolute bottom-[22px] -right-[8px] border rounded-full w-[45%] h-[50%] bg-rose-700"
          style={{
            fontSize: 20 * 1.6,
            lineHeight: 22 * 1.1,
            verticalAlign: 'top',
          }}
        ></span>
      </Button>
    </Fragment>
  );
}
