import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin:10px 14px;
  padding: 0 16px;
  background: #ffff;
  border-radius: 16px;
`;

const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 8px 0;
  .icon{
    width: 28px;
    height: 28px;
    margin-right:10px;
  }
`;

const ItemAmount = styled.div`
  text-align: center;
  padding:16px 0;
  font-size: 28px;
  font-weight: 600
`;

const ItemDetail = styled.div`
  padding:16px 12px 0 12px;
  display: flex;
  flex-direction: row;
  >div{
   padding: 8px 0;
  }
`;

const SelectButton = styled.div`
  border-top: 1px solid #dedede;
  >button{
    width: 50%;
    padding:18px 0;
    background: transparent;
    border:none;
    text-align: center;
    .icon{
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
`;

const ModalWrapper = styled.p`
  padding: 0;
  margin:10px 0 0;
  text-align: center;
`;

export {ModalWrapper, SelectButton, ItemDetail, ItemAmount, ItemIcon, Main};