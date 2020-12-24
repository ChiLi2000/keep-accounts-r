import Icon from "components/Icon";
import React, {useState} from "react";
import styled from "styled-components";
import {createId} from "../../lib/createId";

const Wrapper = styled.section`
  >ul{
   margin: 8px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  >li{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    padding: 6px 0;
    width: 25%;
    .icon{
      width: 32px;
      height: 32px;
      margin-bottom: 4px;
    }
    &.selected{
      color:#e1c748;
      .icon{
      fill:#e1c748;
      }
    }
  }
}
`;

type Tag = {
  id: number,
  name: string,
  value: string
}
const X = [
  {id: 1, name: "奖金", value: "奖金"},
  {id: 2, name: "宠物", value: "宠物"},
  {id: 3, name: "工资", value: "工资"},
  {id: 4, name: "红包", value: "红包"},
  {id: 5, name: "餐饮", value: "餐饮"}
];
type Props = {
  value: number,
  onChange: (selected: number) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<Tag[]>(X);
  const selectedTagId = props.value;
  const onToggleTag = (tagId: number) => {
    if (selectedTagId !== tagId) {
      props.onChange(tagId);
    }
  };
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为");
    const tagNames = tags.map(tag => tag.name);
    if (tagName !== null) {
      if (tagName === "") {
        alert("标签名不能为空");
      } else if (tagNames.indexOf(tagName) >= 0) {
        alert("标签名重复");
      } else {
        setTags([...tags, {id: createId(), name: tagName, value: "其它"}]);
      }
    }
  };
  const getClass = (tagId: number) => selectedTagId === tagId ? "selected" : "";
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => {onToggleTag(tag.id);}} className={getClass(tag.id)}>
            <Icon name={tag.value}/>{tag.name}</li>)}
        <li onClick={addTag}><Icon name='add'/>添加</li>
      </ul>
    </Wrapper>
  );
};

export {TagsSection};