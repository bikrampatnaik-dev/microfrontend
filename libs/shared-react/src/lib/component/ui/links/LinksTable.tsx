import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import { ColumnDef } from '@tanstack/react-table';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getGroupedRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable,
  ExpandedState,
  ColumnResizeMode,
  ColumnResizeDirection,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableColumnInlineFilters,
  ContextMenuTrigger,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from '@/shared-react';
import LinksTablePagination from './LinksTablePagination';
import './LinksTable.scss';

export default function LinksTable<T>({
  data,
  columnsDef,
  height = '60.5vh',
  isGroupView,
  isHavingPagination = true,
  columnSearch = true,
  tableClassName,
}: {
  data: any;
  columnsDef: ColumnDef<any>[];
  height?: string;
  isGroupView?: boolean;
  isHavingPagination?: boolean;
  columnSearch?: boolean;
  tableClassName?: string;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>('onChange');

  const [columnResizeDirection, setColumnResizeDirection] =
    React.useState<ColumnResizeDirection>('ltr');

  const table = useReactTable({
    data,
    columns: [...columnsDef],
    columnResizeMode,
    columnResizeDirection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getGroupedRowModel: getGroupedRowModel(),
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getExpandedRowModel: getExpandedRowModel(),
    // getRowCanExpand: () => isGroupView,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      expanded,
    },
    meta: {
      isGroupView: isGroupView,
    },
  });
  const [dataGridHeight, setDataGridHeight] = React.useState<string>(height);
  const [dataGridWidth, setDataGridWidth] = React.useState<string>('w-full');

  return (
    <Fragment>
      <div className={`${tableClassName} ${dataGridWidth}`}>
        <div className="sm:border">
          <div
            style={{ height: dataGridHeight }}
            className="relative overflow-auto custom-scrollbar"
          >
            <Table>
              <TableHeader className="sticky top-0 z-0">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead className="bg-white" key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {header.column.getCanFilter() && columnSearch ? (
                            <div>
                              <TableColumnInlineFilters
                                column={header.column}
                                table={table}
                              />
                            </div>
                          ) : null}
                          <div
                            {...{
                              onDoubleClick: () => header.column.resetSize(),
                              onMouseDown: header.getResizeHandler(),
                              onTouchStart: header.getResizeHandler(),
                              className: `resizer ${
                                table.options.columnResizeDirection
                              } ${
                                header.column.getIsResizing()
                                  ? 'isResizing'
                                  : ''
                              }`,
                              style: {
                                transform:
                                  columnResizeMode === 'onEnd' &&
                                  header.column.getIsResizing()
                                    ? `translateX(${
                                        (table.options.columnResizeDirection ===
                                        'rtl'
                                          ? -1
                                          : 1) *
                                        (table.getState().columnSizingInfo
                                          .deltaOffset ?? 0)
                                      }px)`
                                    : '',
                              },
                            }}
                          />
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      style={{ height: '40px' }}
                      key={row.id}
                      data-state={row.getIsSelected() ? 'selected' : undefined}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          className="p-0 px-2"
                          key={cell.id}
                          height={20}
                          width={cell.column.getSize()}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columnsDef.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        {isHavingPagination ? (
          <LinksTablePagination table={table} defaultPageSize={20} />
        ) : undefined}
      </div>
    </Fragment>
  );
}
