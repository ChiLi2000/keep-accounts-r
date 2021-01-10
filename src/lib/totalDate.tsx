import {RecordItem} from "hooks/useRecords";
import {Category} from "views/Account";

const totalDate = (records: RecordItem[], type: Category) => {
  return records.filter(r => r.category === type)
    .reduce((sum, item) => {
      return sum + item.amount;
    }, 0);
};
export {totalDate};