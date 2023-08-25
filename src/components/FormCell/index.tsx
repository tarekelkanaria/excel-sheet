"use client";

import { updateCell } from "@/redux/features/tableSlice";
import { useAppDispatch } from "@/redux/typed-hooks";
import { useState } from "react";
import type { FormCellProps } from "@/types";

const FormCell = ({ rowIdx, colIdx, value }: FormCellProps) => {
  const dispatch = useAppDispatch();
  const [enteredText, setEnteredText] = useState<string>(value);

  const handleEnterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.target.value);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!enteredText.trim()) return;
    dispatch(updateCell({ rowIdx, colIdx, value: enteredText }));
  };

  return (
    <form onSubmit={handleSave} className="flex items-center">
      <input
        type="text"
        value={enteredText}
        onChange={handleEnterText}
        className="flex-1 h-full bg-transparent focus:outline-none w-1/2"
      />
      {(value.trim().length === 0 || enteredText !== value) && (
        <button
          disabled={!enteredText.trim()}
          type="submit"
          className="p-1 rounded-lg bg-slate-200 disabled:opacity-80 text-blue-900 disabled:cursor-not-allowed"
        >
          Save
        </button>
      )}
    </form>
  );
};

export default FormCell;
