import React from "react";
import {Modal} from "antd";
import styled from "styled-components";

const ModalWrapper = styled.p`
  padding: 0;
  margin:10px 0 0;
  text-align: center;
`;

type Props = {
  visible: boolean
  onOk: () => void
  onCancel: () => void
}

const DeleteCue: React.FC<Props> = (props) => {
  const {visible, onOk, onCancel, children} = props;
  return (
    <Modal title="" visible={visible}
           centered closable={false}
           onOk={onOk} onCancel={onCancel}
           okText="删除" cancelText="取消">
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </Modal>
  );
};

export {DeleteCue};