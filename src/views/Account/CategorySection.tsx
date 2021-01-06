import React, {useState} from "react";
import {Category} from "../Account";

type Props = {
  value: Category
  onChange: (value: Category) => void
  className?: string;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {"-": "支出", "+": "收入"};
  type Keys = keyof typeof categoryMap    //'-','+'
  const [categoryList] = useState<Keys[]>(["-", "+"]);
  const category = props.value;
  return (
    <div className={props.className}>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? "selected" : ""}
              onClick={() => {props.onChange(c);}}>
            {categoryMap[c]}
          </li>)}
      </ul>
    </div>
  );
};
export {CategorySection};