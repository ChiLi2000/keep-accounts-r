import React from "react";
import moment from "moment";
import RecordEdit from "components/RecordEdit";
import {Category} from "hooks/useRecords";

function Account() {
  const defaultFormDate = {
    category: "-" as Category,
    tagId: 1,
    note: "",
    amount: 0,
    createdAt: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
  };
  return (
    <RecordEdit  record={defaultFormDate} autoSelectedTag={true}/>
  );
}

export default Account;