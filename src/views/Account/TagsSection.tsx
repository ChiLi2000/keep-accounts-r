import Icon from "components/Icon";
import React from "react";
import styled from "styled-components";
import {useTags} from "hooks/useTags";
import useLongPress from "lib/useLongPress";

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


type Props = {
  value: number,
  onChange: (selected: number) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();

  const selectedTagId = props.value;
  const onToggleTag = (tagId: number) => {
    if (selectedTagId !== tagId) {
      props.onChange(tagId);
    }
  };
  const getClass = (tagId: number) => selectedTagId === tagId ? "selected" : "";

  const onLongPress = () => {
    console.log('longpress is triggered');
  };

  const onClick = () => {
  console.log('click is triggered')
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1000,
  };

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions)


  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => {onToggleTag(tag.id);}} className={getClass(tag.id)}
              {...longPressEvent}>
            <Icon name={tag.value}/>{tag.name}</li>)}
        <li onClick={addTag}><Icon name='add' />添加</li>
      </ul>
    </Wrapper>
  );
};

export {TagsSection};