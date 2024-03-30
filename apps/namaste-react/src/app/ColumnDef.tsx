import {
  CaretSortIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClockIcon,
  DotsHorizontalIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IndeterminateCheckbox,
} from '@/shared-react';

export type TransactionMeta = {
  id: string;
  dateReceived: string;
  businessDocument: string;
  sender: string;
  receiver: string;
  processingStatus: string;
  userStatus: string;
  channelId: string;
};

export const columnsDef: ColumnDef<TransactionMeta>[] = [
  {
    id: 'leftGridAction',
    size: 40,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER,
    enableResizing: false,
    header: ({ table }) => {
      const meta: any = table.options.meta
        ? table.options.meta
        : { isGroupView: false };
      const isGroupView = meta['isGroupView'];
      return (
        <div className="flex justify-start">
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />

          {isGroupView ? (
            <button
              {...{
                onClick: table.getToggleAllRowsExpandedHandler(),
              }}
            >
              {table.getIsAllRowsExpanded() && true ? (
                <ChevronDownIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </button>
          ) : (
            <button></button>
          )}
        </div>
      );
    },
    cell: ({ table, row }) => {
      const meta: any = table.options.meta
        ? table.options.meta
        : { isGroupView: false };
      const isGroupView = meta['isGroupView'];
      return (
        <div className="flex justify-evenly">
          <IndeterminateCheckbox
            {...{
              className: '',
              checked: row.getIsSelected(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />

          {row.getCanExpand() && row.parentId === undefined && isGroupView ? (
            <button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: 'pointer' },
              }}
            >
              {row.getIsExpanded() ? <ChevronDownIcon /> : <ChevronRightIcon />}
            </button>
          ) : (
            <button style={{ width: '17px' }}></button>
          )}
        </div>
      );
    },
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'dateReceived',
    size: 200,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER,
    header: ({ column }) => {
      return (
        <Button
          className="py-0 px-1 w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date Received
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ table, row }) => {
      const meta: any = table.options.meta
        ? table.options.meta
        : { isGroupView: false };
      const isGroupView = meta['isGroupView'];
      return (
        <div className="truncate">
          {(row.parentId && isGroupView) || !isGroupView ? (
            <a
              className="hover:underline hover:text-sky-400 hover:cursor-pointer"
              onClick={(rows) =>
                alert(`cell clicked: ${row.original.dateReceived}`)
              }
            >
              <span className="flex items-center">
                <ClockIcon className="mr-2 text-green-600" />
                {row.getValue('dateReceived')}
              </span>
            </a>
          ) : (
            <div className="flex items-center">
              <ClockIcon className="mr-2 text-green-600" />
              {row.getValue('dateReceived')}
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'businessDocument',
    header: ({ column }) => {
      return (
        <Button
          className="py-0 px-1 w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Business Document
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center flex-row justify-start">
        <FileTextIcon className="text-red-600 mr-2" />
        {row.getValue('businessDocument')}
      </div>
    ),
  },
  {
    accessorKey: 'sender',
    header: ({ column }) => {
      return (
        <Button
          className="py-0 px-1 w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Sender
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    meta: {
      textAlign: 'text-right',
    },
    cell: ({ row }) => (
      
      <div className="capitalize">{row.getValue('sender')}</div>
    ),
  },
  {
    accessorKey: 'receiver',
    header: ({ column }) => {
      return (
        <Button
          className="py-0 px-1 w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Receiver
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    meta: {
      textAlign: 'text-right',
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('receiver')}</div>
    ),
  },
  {
    accessorKey: 'processingStatus',
    header: ({ column }) => {
      return (
        <Button
          className="py-0 px-1 w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Processing Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    meta: {
      textAlign: 'text-right',
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('processingStatus')}</div>
    ),
  },
  {
    accessorKey: 'userStatus',
    header: ({ column }) => {
      return (
        <Button
          className="py-0 px-1 w-full justify-between"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          User Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    meta: {
      textAlign: 'text-right',
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('userStatus')}</div>
    ),
  },
  {
    id: 'action',
    size: 30,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER,
    enableResizing: false,
    header: () => <div className="text-right">Action</div>,
    meta: {
      textAlign: 'text-right',
    },
    cell: ({ table, row }) => {
      const meta: any = table.options.meta
        ? table.options.meta
        : { isGroupView: false };
      const isGroupView = meta['isGroupView'];
      if (isGroupView && row.parentId === undefined) {
        return <button></button>;
      }
      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
              // onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    // cell: ({ table, row }) => {

    //   {
    //     false ? (
    //       <button style={{ marginRight: '20px' }}></button>
    //     ) : (
    //       <div className="text-right">
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="ghost" className="h-8 w-8 p-0">
    //               <span className="sr-only">Open menu</span>
    //               <DotsHorizontalIcon className="h-4 w-4" />
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent align="end">
    //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //             <DropdownMenuItem
    //             // onClick={() => navigator.clipboard.writeText(payment.id)}
    //             >
    //               Copy payment ID
    //             </DropdownMenuItem>
    //             <DropdownMenuSeparator />
    //             <DropdownMenuItem>View customer</DropdownMenuItem>
    //             <DropdownMenuItem>View payment details</DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       </div>
    //     );
    // }
    // },
  },
];
