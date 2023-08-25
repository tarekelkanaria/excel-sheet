import { createSlice } from "@reduxjs/toolkit";
import { InitialTableState, UpdateCellParams } from "@/types";

const initialState: InitialTableState = {
  rows: [[]],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    getStoredTable: (state, action: { type: string; payload: string[][] }) => {
      state.rows = action.payload;
    },
    addRow: (state) => {
      if (state.rows[0].length === 0) {
        state.rows[0] = [" "];
      } else {
        const newRow: string[] = [];
        newRow.length = state.rows[0].length;
        state.rows = [...state.rows, newRow.fill(" ")];
      }
    },
    addColumn: (state) => {
      if (state.rows[0].length === 0) {
        state.rows[0] = [" "];
      } else {
        state.rows = state.rows.map((row) => [...row, " "]);
      }
    },
    removeRow: (state) => {
      if (state.rows.length === 1) {
        state.rows = [[]];
      } else {
        state.rows.pop();
      }
    },
    removeColumn: (state) => {
      if (state.rows[0].length === 1) {
        state.rows = [[]];
      } else {
        state.rows.forEach((row) => row.pop());
      }
    },
    updateCell: (
      state,
      action: { type: string; payload: UpdateCellParams }
    ) => {
      const { rowIdx, colIdx, value } = action.payload;
      state.rows[rowIdx][colIdx] = value;
    },
  },
});

export const {
  getStoredTable,
  addRow,
  addColumn,
  updateCell,
  removeRow,
  removeColumn,
} = tableSlice.actions;

export default tableSlice.reducer;
