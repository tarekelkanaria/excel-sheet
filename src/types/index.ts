import store from "@/redux/store";

export interface InitialTableState {
  rows: string[][];
}

export interface UpdateCellParams {
  rowIdx: number;
  colIdx: number;
  value: string;
}

export type RootState = ReturnType<typeof store.getState>;

export type DispatchAction = typeof store.dispatch;

export interface CellProps {
  row: {
    index: number;
  };
  value: string;
}

export type FormCellProps = {
  rowIdx: number;
  colIdx: number;
  value: string;
};

export type ProvidersProps = {
  children: React.ReactNode;
};
