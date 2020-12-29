import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

type Tag = {
  id: number,
  genre: string,
  name: string,
  value: string
}
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  // 组件挂载时执行，且只执行第一次 从 0 到有
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tagList") || "[]");
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), genre: "-", name: "餐饮", value: "餐饮"},
        {id: createId(), genre: "-", name: "购物", value: "购物"},
        {id: createId(), genre: "-", name: "服饰美容", value: "服饰美容"},
        {id: createId(), genre: "-", name: "交通", value: "交通"},
        {id: createId(), genre: "-", name: "住房缴费", value: "住房缴费"},
        {id: createId(), genre: "-", name: "生活服务", value: "生活服务"},
        {id: createId(), genre: "-", name: "学习", value: "学习"},
        {id: createId(), genre: "-", name: "娱乐", value: "娱乐"},
        {id: createId(), genre: "-", name: "运动", value: "运动"},
        {id: createId(), genre: "-", name: "旅游", value: "旅游"},
        {id: createId(), genre: "-", name: "酒店", value: "酒店"},
        {id: createId(), genre: "-", name: "医疗", value: "医疗"},
        {id: createId(), genre: "-", name: "宠物", value: "宠物"},
        {id: createId(), genre: "-", name: "人情", value: "人情"},
        {id: createId(), genre: "-", name: "红包", value: "红包"},
        {id: createId(), genre: "-", name: "转账", value: "转账"},
        {id: createId(), genre: "-", name: "其它", value: "其它"},
        {id: createId(), genre: "+", name: "退款", value: "退款"},
        {id: createId(), genre: "+", name: "工资", value: "工资"},
        {id: createId(), genre: "+", name: "转账", value: "转账"},
        {id: createId(), genre: "+", name: "其它", value: "其它"},
        {id: createId(), genre: "+", name: "人情", value: "人情"}
      ];
    }
    setTags(localTags);
  }, []);
  // 自定义 hooks 第一次不执行 变化再执行
  useUpdate(() => {
    window.localStorage.setItem("tagList", JSON.stringify(tags));
  }, tags);

  const addTag = (genre:string) => {
    console.log(genre)
    const tagName = window.prompt("新标签的名称为");
    const tagNames = (tags.filter(t=>t.genre===genre)).map(t => t.name);
    if (tagName !== null) {
      if (tagName === "") {
        alert("标签名不能为空");
      } else if (tagNames.indexOf(tagName) >= 0) {
        alert("标签名重复");
      } else {
        setTags([...tags, {id: createId(), genre, name: tagName, value: "其它"}]);
      }
    }
  };
  const updateTag = (id: number, {name}: { name: string }) => {
    tags.filter(t => t.name === name)[0]
      ? alert("标签名重复")
      : setTags(tags.map(tag => tag.id === id ? {id, genre: "-", name: name, value: "其它"} : tag));
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : "";
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return {tags, addTag, updateTag, getName, deleteTag};
};

export {useTags};
