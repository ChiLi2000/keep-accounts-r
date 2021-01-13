import React from "react";
import {useRecords} from "hooks/useRecords";
import {useParams} from "react-router-dom";
import {Params} from "./Record";
import RecordEdit from "components/RecordEdit";

function Update() {
  let {id: idString} = useParams<Params>();
  const {findRecord} = useRecords();
  const record = findRecord(parseInt(idString));
  return (
    <>{record ?
      <RecordEdit idR={parseInt(idString)} record={record} autoSelectedTag={false}/>
      : <div>不存在</div>}</>
  );
}

export default Update;