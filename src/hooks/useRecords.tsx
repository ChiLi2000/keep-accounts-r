import {Category} from "views/Account";
import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {createIdR} from "lib/createId";

export type RecordItem = {
  idR: number,
  category: Category,
  tagId: number,
  note: string,
  amount: number,
  createdAt: string
}
type newRecordItem = Omit<RecordItem, "idR">
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, records);

  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, idR: createIdR()};
    setRecords([...records, record]);
    return true;
  };
  return {records, addRecord};
};
