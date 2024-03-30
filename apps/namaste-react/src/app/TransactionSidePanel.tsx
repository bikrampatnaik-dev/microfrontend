import React, { useEffect } from 'react';
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  Input,
} from '@/shared-react';
import {
  CaretSortIcon,
  ChatBubbleIcon,
  DotFilledIcon,
  ReloadIcon,
} from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import LinksTable from '@/libs/shared-react/src/lib/component/ui/links/LinksTable';


export default function TransactionSidePanelComponent() {
  const [attributeList, setAttributeList] = React.useState<any>([]);
  const colDef: ColumnDef<any>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <Button
            className="py-0 px-1 w-full justify-between"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Name
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      meta: {
        textAlign: 'text-right',
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'value',
      header: 'Value',
      meta: {
        textAlign: 'text-right',
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('value')}</div>
      ),
    },
  ];

  const taskColDef: ColumnDef<any>[] = [
    {
      accessorKey: 'timeCreated',
      header: 'Time created',
      meta: {
        textAlign: 'text-right',
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'taskType',
      header: 'Task Type',
      meta: {
        textAlign: 'text-right',
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('value')}</div>
      ),
    },
    {
      accessorKey: 'taskStatus',
      header: 'Task Status',
      meta: {
        textAlign: 'text-right',
      },
      cell: ({ row, column }) => {
        debugger;
        return <div className="capitalize">{row.getValue('value')}</div>;
      },
    },
    {
      accessorKey: 'actions',
      header: 'Action',
      meta: {
        textAlign: 'text-right',
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('value')}</div>
      ),
    },
  ];

  useEffect(() => {
    const list = [
      {
        id: null,
        name: 'Document ID',
        value: [],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Date Received',
        value: ['1709816501000'],
        dataType: 'DATETIME',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Document Type',
        value: ['Unknown'],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Group ID',
        value: [],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Conversation ID',
        value: [],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Last Modified',
        value: ['1709816501000'],
        dataType: 'DATETIME',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Processing Status',
        value: ['DONE'],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Receiver',
        value: ['Unknown'],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Sender',
        value: ['Unknown'],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Original Sender',
        value: [],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Original Receiver',
        value: [],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'User Status',
        value: ['IGNORED'],
        dataType: 'STRING',
        systemAttribute: true,
      },
      {
        id: null,
        name: 'Internal ID',
        value: ['m1400300hocg2lf3000024j1'],
        dataType: 'STRING',
        systemAttribute: true,
      },
    ];
    setAttributeList(list);
  }, []);
  return (
    <Tabs defaultValue="summary" className="w-full relative ">
      <div className="flex items-center justify-between border-b-2 ">
        <label className="p-2 font-bold">Transaction Name</label>
        <TabsList className="w-[400px] mx-2">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="attribute">Attributes</TabsTrigger>
          <TabsTrigger value="task">Task</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>
      </div>
      <div className="w-full">
        <TabsContent className="m-0" value="summary">
          <div className="flex items-center justify-end border-b-2">
            <div className="mr-2 flex items-center my-1">
              <span className="text-xs mr-2">6 Messages</span>
              <Button
                className="hover:cursor-pointer text-sm mr-1"
                variant="outline"
                size={'icon'}
                onClick={() => console.log('bookmark clicked')}
              >
                <ReloadIcon />
              </Button>
              <Button
                className="hover:cursor-pointer text-sm"
                variant="outline"
                size={'icon'}
                onClick={() => console.log('bookmark clicked')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full p-2 h-[55vh] overflow-y-auto custom-scrollbar">
            <AccordionItem value="item-1" className="border-0 ">
              <div className="flex items-center">
                <DotFilledIcon className="text-lg mr-2" />
                <Checkbox id="terms" className="mr-2" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col">
                      <p className="text-sm text-left">Is it accessible?</p>
                      <p className="text-xs font-normal">Processing Complete</p>
                    </div>
                  </AccordionTrigger>
                </label>
              </div>
              <AccordionContent className="flex w-full ml-[5em]">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-0">
              <div className="flex items-center">
                <DotFilledIcon className=" text-lg mr-2" />
                <Checkbox id="terms-2" className="mr-2" />
                <label
                  htmlFor="terms-2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col">
                      <p className="text-sm text-left">Is it Styled?</p>
                      <p className="text-xs font-normal">Processing Complete</p>
                    </div>
                  </AccordionTrigger>
                </label>
              </div>
              <AccordionContent className="flex w-full ml-[5em]">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-0">
              <div className="flex items-center">
                <DotFilledIcon className="text-lg mr-2" />
                <Checkbox id="terms-3" className="mr-2" />
                <label
                  htmlFor="terms-3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col">
                      <p className="text-sm text-left">Is it animated?</p>
                      <p className="text-xs font-normal">Processing Complete</p>
                    </div>
                  </AccordionTrigger>
                </label>
              </div>
              <AccordionContent className="flex w-full ml-[5em]">
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-0">
              <div className="flex items-center">
                <DotFilledIcon className="text-lg mr-2" />
                <Checkbox id="terms-4" className="mr-2" />
                <label
                  htmlFor="terms-4"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col">
                      <p className="text-sm text-left">Is it animated?</p>
                      <p className="text-xs font-normal">Processing Complete</p>
                    </div>
                  </AccordionTrigger>
                </label>
              </div>
              <AccordionContent className="flex w-full ml-[5em]">
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-0">
              <div className="flex items-center">
                <DotFilledIcon className="text-lg mr-2" />
                <Checkbox id="terms-5" className="mr-2" />
                <label
                  htmlFor="terms-5"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col">
                      <p className="text-sm text-left">Is it animated?</p>
                      <p className="text-xs font-normal">Processing Complete</p>
                    </div>
                  </AccordionTrigger>
                </label>
              </div>
              <AccordionContent className="flex w-full ml-[5em]">
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-0">
              <div className="flex items-center">
                <DotFilledIcon className="text-lg mr-2" />
                <Checkbox id="terms-6" className="mr-2" />
                <label
                  htmlFor="terms-6"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col">
                      <p className="text-sm text-left">Is it animated?</p>
                      <p className="text-xs font-normal">Processing Complete</p>
                    </div>
                  </AccordionTrigger>
                </label>
              </div>
              <AccordionContent className="flex w-full ml-[5em]">
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="border-0">
              <div className="flex items-center">
                <DotFilledIcon className="text-lg mr-2" />
                <Checkbox id="terms-7" className="mr-2" />
                <label
                  htmlFor="terms-7"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col">
                      <p className="text-sm text-left">Is it animated?</p>
                      <p className="text-xs font-normal">Processing Complete</p>
                    </div>
                  </AccordionTrigger>
                </label>
              </div>
              <AccordionContent className="flex w-full ml-[5em]">
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent className="m-0" value="attribute">
          <div className="flex items-center justify-end border-b-2">
            <div className="mr-2 flex items-center">
              <Input
                type="Search"
                placeholder="Search"
                className="h-[25px] my-2"
              />
            </div>
          </div>
          <LinksTable
            data={attributeList}
            columnsDef={colDef}
            isHavingPagination={false}
            columnSearch={false}
            height="55vh"
          />
        </TabsContent>
        <TabsContent className="m-0" value="task">
          <div className="flex items-center justify-end border-b-2">
            <div className="mr-1 flex items-center">
              <Input
                type="Search"
                placeholder="Search"
                className="h-[25px] my-2"
              />
            </div>
          </div>
          <LinksTable
            data={[]}
            columnsDef={taskColDef}
            isHavingPagination={false}
            columnSearch={false}
            height="55vh"
          />
        </TabsContent>
        <TabsContent value="content">fas</TabsContent>
      </div>
    </Tabs>
  );
}
