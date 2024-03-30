import { TableCell, TableRow } from '@/shared-react';
import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
import React, { forwardRef, useEffect } from 'react';
interface ChildProps<T> {
  afterCollapsibleTriggerEvent: (data: any) => void;
}

const LinksVisitors = forwardRef<
  HTMLTableElement,
  {
    data: any[];
    columnsDef: ColumnDef<any>[];
    afterCollapsibleTriggerEvent: ChildProps<any>['afterCollapsibleTriggerEvent'];
  }
>(({ data = [], columnsDef, afterCollapsibleTriggerEvent }, ref) => {
  const [rowSelection, setRowSelection] = React.useState({});
  const childTable = useReactTable({
    data,
    columns: [...columnsDef],
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  useEffect(() => {
    afterCollapsibleTriggerEvent(childTable);
  }, []);

  return (
    <>
      {childTable.getRowModel().rows?.length ? (
        childTable.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() ? 'selected' : undefined}
          >
            {row.getVisibleCells().map((cell) => {
              if (cell.column.id === 'toggle') {
                return (
                  <TableCell
                    colSpan={1}
                    key={cell.id}
                    width={cell.column.columnDef.size}
                  ></TableCell>
                );
              } else {
                return (
                  <TableCell key={cell.id} width={cell.column.columnDef.size}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              }
            })}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columnsDef.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </>
  );
});

export default LinksVisitors;
