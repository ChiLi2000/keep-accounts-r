import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

type Tag = {
  id: number,
  name: string,
  value: string
}
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  // 组件挂载时执行，且只执行第一次 从 0 到有
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: "奖金", value: "奖金"},
        {id: createId(), name: "宠物", value: "宠物"},
        {id: createId(), name: "工资", value: "工资"},
        {id: createId(), name: "红包", value: "红包"},
        {id: createId(), name: "餐饮", value: "餐饮"}
      ];
    }
    setTags(localTags);
  }, []);
  // 自定义 hooks 第一次不执行 变化再执行
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, tags);

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
  const updateTag = (id: number, {name}: { name: string }) => {
    tags.filter(t => t.name === name)[0]
      ? alert("标签名重复")
      : setTags(tags.map(tag => tag.id === id ? {id, name: name,value:'其它'} : tag));
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : "";
  };

  return {tags, addTag,updateTag,getName};
};

export {useTags}
