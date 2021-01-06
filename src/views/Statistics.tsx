import React, {useState} from "react";
import moment from "moment";
import {TimeSelector} from "components/TimeSelector";
import {TimeWrapper} from "components/TimeWrapper";
import {MyCategorySection} from "components/MyCategorySection";
import Layout from "components/Layout";

function Statistics() {
  const [x, setX] = useState(moment(new Date().toISOString()).format("YYYY-MM"));
  const styleTime = {"width": "110px", "borderRadius": "25px", "padding": "8px 16px"};
  return (
    <Layout>
      <TimeWrapper>
        <TimeSelector value={x}
                      onChange={(monthValue) => setX(monthValue)}
                      type="month"
                      style={styleTime}/>
      </TimeWrapper>
      <MyCategorySection value='-'
                         onChange={() => {}}/>
      <div>record</div>
    </Layout>
  );
}

export default Statistics;