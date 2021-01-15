import Icon from "components/Icon";
import React, {ChangeEventHandler, useEffect, useState} from "react";
import {useTags} from "hooks/useTags";
import {Button, message, Modal} from "antd";
import {onItemTouchEnd, onItemTouchStart} from "lib/useLongPress";
import {Wrapper} from "./TagsSection/Wrapper";
import {LabelWrapper} from "./TagsSection/LabelWrapper";
import {DeleteCue} from "components/DeleteCue";

type Props = {
  value: number,
  onChange: (selected: number) => void
  type: string
  autoSelectedTag: boolean
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag, getName, updateTag, deleteTag} = useTags();
  const selectedTagId = props.value;
  const [id, setId] = useState(0);
  const [newName, setNewName] = useState("");
  const type = props.type;
  const onToggleTag = (tagId: number) => {
    if (selectedTagId !== tagId) {
      props.onChange(tagId);
    }
  };
  const getClass = (tagId: number) => selectedTagId === tagId ? "selected" : "";
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewName(e.target.value.substring(0, 4));
  };
  const onLongPress = (tagId: number) => {
    if (tagId > 22) {
      showModal();
      setId(tagId);
      setNewName(getName(tagId));
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {setIsModalVisible(true);};

  const handleCancel = () => {setIsModalVisible(false);};

  const updateTagId = (genre: string) => {
    handleCancel();
    updateTag(id, genre, {name: newName});
  };

  const deleteTagId = () => {
    handleCancel();
    deleteTag(id);
    message.success({content: "已删除", style: {marginTop: "40vh"}});
    setDeleteCueVisible(false);
    selectedTagFirst();
  };
  const [autoSelectedTag, setAutoSelectedTag] = useState(props.autoSelectedTag);
  useEffect(() => {
    autoSelectedTag && selectedTagFirst();
    setAutoSelectedTag(true);
    // eslint-disable-next-line
  }, [type]);
  const selectedTagFirst = () => {
    type === "-" ? onToggleTag(1) : onToggleTag(18);
  };

  const [deleteCueVisible, setDeleteCueVisible] = useState(false);
  return (
    <>
      <Wrapper>
        <ul>
          {(tags.filter(t => t.genre === type)).map(tag =>
            <li key={tag.id} className={getClass(tag.id)}
                onTouchStart={() => {
                  onItemTouchStart(() => onLongPress(tag.id));
                }}
                onTouchEnd={() => {
                  onItemTouchEnd(() => onToggleTag(tag.id));
                }}>
              <Icon name={tag.value}/>{tag.name}</li>)}
          <li onClick={() => addTag(type)}><Icon name='add'/>添加</li>
        </ul>
      </Wrapper>
      <Modal title="请编辑类别名" visible={isModalVisible} onCancel={handleCancel}
             footer={[
               <Button key="删除" onClick={() => setDeleteCueVisible(true)}>删除</Button>,
               <Button key="取消" onClick={handleCancel}>取消</Button>,
               <Button key="确定" type="primary" onClick={() => updateTagId(type)}>确定</Button>
             ]}>
        <LabelWrapper>
          <input type="text" value={newName} onChange={onChange}/>
          <p>{newName.length} / 4</p>
        </LabelWrapper>
      </Modal>
      <DeleteCue visible={deleteCueVisible} onOk={deleteTagId} onCancel={() => setDeleteCueVisible(false)}>
        删除后,该分类下的内容将归为 ”其它“ 分类
      </DeleteCue>
    </>
  );
};

export {TagsSection};