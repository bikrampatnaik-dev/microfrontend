import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Switch,
} from '@/shared-react';
import {
  BarChartIcon,
  BookmarkIcon,
  CalendarIcon,
  DownloadIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  GroupIcon,
  ListBulletIcon,
  MixerVerticalIcon,
  OpenInNewWindowIcon,
  PersonIcon,
  ReloadIcon,
  RocketIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/shared-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;
const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export default function TransactionActionComponent({
  setGroupView,
  setAnalyticView,
}: {
  setGroupView: any;
  setAnalyticView: any;
}) {
  const [isGroupView, setIsGroupView] = React.useState(true);
  const [isAnalyticOpen, setIsAnalyticOpen] = React.useState(false);
  const [isLive, setIsLive] = React.useState(true);

  const toggleGroupView = () => {
    const changeView = !isGroupView;
    setIsGroupView(changeView);
    setGroupView(changeView);
  };
  const toggleAnalyticView = () => {
    const isOpen = !isAnalyticOpen;
    setIsAnalyticOpen(isOpen);
    setAnalyticView(isOpen);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(
      `You submitted the following values: ${JSON.stringify(data, null, 2)}`
    );
  }
  return (
    <>
      <div className="flex items-center space-x-2 ml-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show matches
        </label>
      </div>
      <div className="flex items-center space-x-2 ml-2">
        <Switch
          id="live"
          defaultChecked={true}
          onCheckedChange={(value) => setIsLive(value)}
        />
        <label htmlFor="live">{isLive ? 'Live' : 'Archive'}</label>
      </div>
      <Button
        className="hover:cursor-pointer ml-auto mr-2"
        variant="outline"
        size={'icon'}
        onClick={() => console.log('bookmark clicked')}
      >
        <UpdateIcon />
      </Button>
      <Button
        className="hover:cursor-pointer mr-2"
        variant="outline"
        size={'icon'}
        onClick={() => console.log('bookmark clicked')}
      >
        <OpenInNewWindowIcon />
      </Button>
      <Button
        className="hover:cursor-pointer mr-2"
        variant="outline"
        size={'icon'}
        onClick={toggleGroupView}
      >
        {!isGroupView ? <GroupIcon /> : <ListBulletIcon />}
      </Button>
      <Button className="mr-2" variant="outline" size={'icon'}>
        <MixerVerticalIcon></MixerVerticalIcon>
      </Button>
      <Button className="mr-2" variant="outline" size={'icon'}>
        <BarChartIcon onClick={toggleAnalyticView}></BarChartIcon>
      </Button>
      <Button className="mr-2" variant="outline" size={'icon'}>
        <DownloadIcon></DownloadIcon>
      </Button>
      <Button className="mr-2" variant="outline" size={'icon'}>
        <ReloadIcon></ReloadIcon>
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="hover:cursor-pointer mr-2"
            size={'icon'}
            variant="outline"
          >
            <GearIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    {items.map((item: any) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-center space-x-3 space-y-0"
                            >
                              <FormControl key={item.id}>
                                <Checkbox
                                  key={item.id}
                                  className="hover:cursor-pointer"
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value: any) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal text-zinc-900 opacity-100 hover:cursor-pointer">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Button type="submit">Submit</Button> */}
            </form>
          </Form>
        </PopoverContent>
      </Popover>
    </>
  );
}
