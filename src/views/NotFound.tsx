import React from "react";
import useLongPress from "../lib/useLongPress";

function NotFound() {
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
  return <button {...longPressEvent}>测试长按指令</button>;
}

export default NotFound