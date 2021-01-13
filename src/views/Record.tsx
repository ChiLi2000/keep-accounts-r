import React, {useState} from "react";
import Icon from "components/Icon";
import {Link, useHistory, useParams} from "react-router-dom";
import {useRecords} from "hooks/useRecords";
import {useTags} from "hooks/useTags";
import moment from "moment";
import {numberFilter} from "lib/numberFilter";
import {Topbar} from "./Account/Torbar";
import {Modal} from "antd";
import {ItemAmount, ItemDetail, ItemIcon, Main, ModalWrapper, SelectButton} from "./Record/Wrapper";

export type Params = {
  id: string
}

const Record: React.FC = () => {
  let {id: idString} = useParams<Params>();
  const {findRecord, deleteRecord} = useRecords();
  const {getValue, getName} = useTags();
  const record = findRecord(parseInt(idString));
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const deleteR = () => {
    deleteRecord(parseInt(idString));
    handleCancel();
    setTimeout(() => {
      history.push("/detail");
    }, 0);
    alert("已删除");
  };

  return (
    <>
      <Topbar centerContext={false}/>
      <Main>
        {record ? <div>
          <ItemIcon><Icon name={getValue(record.tagId)}/>{getName(record.tagId)}</ItemIcon>
          <ItemAmount>{record.category + numberFilter(record.amount)}</ItemAmount>
          <ItemDetail>
            <div className="left"><p>记录时间</p><p>备注</p></div>
            <div><p>{moment(record.createdAt).format("YYYY年MM月DD日 LTS")}</p><p>{record.note ? record.note : "无"}</p>
            </div>
          </ItemDetail>
          <SelectButton>
            <button onClick={showModal}><Icon name="delete"/>删除</button>
            <button><Link to={"/update/" + record.idR}><Icon name="edit"/>编辑</Link></button>
          </SelectButton>
        </div> : <div>record 不存在</div>
        }
      </Main>
      <Modal title="" visible={isModalVisible}
             centered closable={false}
             onOk={deleteR} onCancel={handleCancel}
             okText="删除" cancelText="取消">
        <ModalWrapper>
          删除后无法恢复，是否删除
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default Record;