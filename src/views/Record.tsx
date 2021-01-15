import React, {useState} from "react";
import Icon from "components/Icon";
import {Link, useHistory, useParams} from "react-router-dom";
import {useRecords} from "hooks/useRecords";
import {useTags} from "hooks/useTags";
import moment from "moment";
import {numberFilter} from "lib/numberFilter";
import {Topbar} from "./Account/Torbar";
import {message} from "antd";
import {ItemAmount, ItemDetail, ItemIcon, Main,  SelectButton} from "./Record/Wrapper";
import {DeleteCue} from "../components/DeleteCue";

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
    history.goBack()
    message.success({content:'已删除',style:{marginTop:'40vh'}})
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
        </div> : ''
        }
      </Main>
      <DeleteCue visible={isModalVisible} onOk={deleteR} onCancel={handleCancel}>
        删除后无法恢复，是否删除
      </DeleteCue>
    </>
  );
};

export default Record;