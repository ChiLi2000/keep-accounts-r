import Icon from "components/Icon";
import React, {ChangeEventHandler, useState} from "react";
import styled from "styled-components";
import {useTags} from "hooks/useTags";
import {Button, Modal} from "antd";
import {onItemTouchEnd, onItemTouchStart} from "lib/useLongPress";

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
const LabelWrapper = styled.div`
  >input{
  background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
  > p{
    text-align: right;
    font-size: 12px;
    color: #999;
    padding:11px 0 0 0;
   
  }
`;

type Props = {
  value: number,
  onChange: (selected: number) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag, getName, updateTag, deleteTag} = useTags();
  const selectedTagId = props.value;
  const [id, setId] = useState(0);
  const [newName,setNewName] = useState("")

  const onToggleTag = (tagId: number) => {
    if (selectedTagId !== tagId) {
      props.onChange(tagId);
    }
  };
  const getClass = (tagId: number) => selectedTagId === tagId ? "selected" : "";
  const onChange: ChangeEventHandler<HTMLInputElement> =(e)=>{
    setNewName (e.target.value.substring(0, 4))
  }
  const onLongPress = (tagId: number) => {
    if (tagId > 5) {
      showModal();
      setId(tagId);
      setNewName(getName(tagId));
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const updateTagId = () => {
    handleCancel();
    updateTag(id, {name:newName});
  };

  const deleteTagId = () => {
    handleCancel();
    deleteTag(id);
    window.alert("删除成功");
  };

  return (
    <>
      <Wrapper>
        <ul>
          {tags.map(tag =>
            <li key={tag.id} className={getClass(tag.id)}
                onTouchStart={() => {
                  onItemTouchStart(() => onLongPress(tag.id));
                }}
                onTouchEnd={() => {
                  onItemTouchEnd(() => onToggleTag(tag.id));
                }}>
              <Icon name={tag.value}/>{tag.name}</li>)}
          <li onClick={addTag}><Icon name='add'/>添加</li>
        </ul>
      </Wrapper>
      <Modal title="请编辑类别名" visible={isModalVisible}
             footer={[
               <Button key="删除" onClick={deleteTagId}>删除</Button>,
               <Button key="取消" onClick={handleCancel}>取消</Button>,
               <Button key="确定" type="primary" onClick={updateTagId}>确定</Button>
             ]}>
        <LabelWrapper>
          <input type="text"  value={newName} onChange={onChange}/>
          <p>{newName.length}/ 4</p>
        </LabelWrapper>
      </Modal>
    </>
  )
}

export {TagsSection};