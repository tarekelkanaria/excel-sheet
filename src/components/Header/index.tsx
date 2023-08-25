"use client";

import {
  addColumn,
  addRow,
  removeColumn,
  removeRow,
} from "@/redux/features/tableSlice";
import { useAppDispatch } from "@/redux/typed-hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="p-3 flex flex-col gap-y-2 md:flex-row md:gap-y-0 md:space-x-6 justify-center items-center">
      <button
        type="button"
        onClick={() => dispatch(addRow())}
        className="main-btn"
      >
        Add Row
      </button>
      <button
        type="button"
        onClick={() => dispatch(addColumn())}
        className="main-btn"
      >
        Add Column
      </button>
      <button
        type="button"
        onClick={() => dispatch(removeRow())}
        className="main-btn"
      >
        Remove Row
      </button>
      <button
        type="button"
        onClick={() => dispatch(removeColumn())}
        className="main-btn"
      >
        Remove Column
      </button>
    </header>
  );
};

export default Header;
