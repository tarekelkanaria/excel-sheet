"use client";

import { useAppDispatch, useAppSelector } from "@/redux/typed-hooks";
import { getStoredTable } from "@/redux/features/tableSlice";
import { useTable } from "react-table";
import { useMemo, useEffect } from "react";
import { CellProps } from "@/types";
import FormCell from "../FormCell";

const storedRows: string[][] =
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("table")!);

const Table = () => {
  const rowsData = useAppSelector((state) => state.table.rows);
  const dispatch = useAppDispatch();
  const stringCopyOfTable = JSON.stringify(rowsData);

  useEffect(() => {
    if (storedRows) {
      dispatch(getStoredTable(storedRows));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("table", stringCopyOfTable);
  }, [stringCopyOfTable]);

  const memoizedRows = useMemo(
    () => JSON.parse(stringCopyOfTable),
    [stringCopyOfTable]
  );

  const columns = useMemo(
    () =>
      JSON.parse(stringCopyOfTable)[0].map((_cell: string, colIdx: number) => ({
        id: `Column ${colIdx + 1}`,
        accessor: (row: string[]) => row[colIdx],
        Cell: ({ row, value }: CellProps) => (
          <FormCell rowIdx={row.index} colIdx={colIdx} value={value} />
        ),
      })),
    [stringCopyOfTable]
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data: memoizedRows,
  });
  return (
    <table {...getTableProps()} className="w-full border-collapse">
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              key={row.getRowProps().key}
              className="bg-sky-200 even-row hover:bg-orange-100 transition-colors duration-200"
            >
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  key={cell.getCellProps().key}
                  className="p-1 border border-blue-900 min-w-[200px]"
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
