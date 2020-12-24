import moment from "moment";
import {Category} from "../views/Account";
import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export type RecordItem = {
  category: Category,
  tagId: number,
  note: string,
  amount: number,
  createdAt: string
}

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);

  const addRecord = (record: RecordItem) => {
    setRecords([...records, record]);
    return true;
  };
  return {records, addRecord};
};
