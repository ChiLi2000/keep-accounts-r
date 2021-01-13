import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {createIdR} from "lib/createId";

export type Category = "-" | "+"
export type RecordItem = {
  idR: number,
  category: Category,
  tagId: number,
  note: string,
  amount: number,
  createdAt: string
}
export type newRecordItem = Omit<RecordItem, "idR">
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

  const findRecord = (idR: number) => records.filter(r => r.idR === idR)[0];

  const updateRecord = (idR: number, newRecord: RecordItem) => {
    setRecords([...(records.filter(r => r.idR !== idR)), newRecord]);
  };
  return {records, addRecord, findRecord, updateRecord};
};
