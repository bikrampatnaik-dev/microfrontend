import { useEffect } from 'react';
import { Badge } from '../badge/Badge';
import { CrossCircledIcon, ResetIcon } from '@radix-ui/react-icons';
import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared-react';

function LinksTablePagination({
  table,
  defaultPageSize,
}: {
  table: any;
  defaultPageSize: number;
}) {
  let selectedRowCount = 0;
  useEffect(() => {
    table.setPageSize(Number(defaultPageSize));
  }, []);
  return (
    <div className="flex items-center justify-between p-2">
      <div className="text-sm text-muted-foreground flex items-center">
        <Button variant="outline" size={'icon'}>
          <ResetIcon className="hover:cursor-pointer" />
        </Button>
        <Select>
          <SelectTrigger className="w-[180px] ml-2 h-[32px] mr-2 bg-[#cd515b] text-white">
            <SelectValue placeholder="Select a view mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Mode</SelectLabel>
              <SelectItem value="compare">Compare view mode</SelectItem>
              <SelectItem value="multi">Multi view mode</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <>
          {selectedRowCount} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </>
      </div>
      <div className="space-x-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>

          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>

          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>

          <span className="flex items-center gap-1">
            Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default LinksTablePagination;
