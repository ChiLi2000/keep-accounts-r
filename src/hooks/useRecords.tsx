import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";
import {createIdR} from "lib/createId";
import {message} from "antd";

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
    message.success({content: "已记一笔", style: {marginTop: "40vh"},duration:1});
    return true;
  };

  const findRecord = (idR: number) => records.filter(r => r.idR === idR)[0];

  const updateRecord = (idR: number, newRecord: RecordItem) => {
    setRecords([...(records.filter(r => r.idR !== idR)), newRecord]);
    message.success({content: "修改成功", style: {marginTop: "46vh"},duration:1});
  };

  const deleteRecord = (idR: number) => {
    setRecords(records.filter(r => r.idR !== idR));
    message.success({content:'已删除',style:{marginTop:'40vh'},duration:1})
  };
  const defaultRecord = (tagId: number) => {
    if(records.filter(r => r.tagId === tagId)[0]){
      setRecords([...(records.filter(r => r.tagId !== tagId))])
    }
    message.success({content: "已删除", style: {marginTop: "40vh"},duration:1});
  };
  return {records, addRecord, findRecord, updateRecord, deleteRecord, defaultRecord};
};
