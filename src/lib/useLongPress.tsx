import { useCallback, useRef, useState } from "react";

const useLongPress = (
  onLongPress:Function,
  onClick:Function,
  { shouldPreventDefault = true, delay = 1000 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef();
  const target = useRef();

  const start = useCallback(
    event => {
      if (shouldPreventDefault && event.target) {
        // 监听触摸事件
        event.target.addEventListener("touchend", preventDefault, {
          passive: false
        });
        target.current = event.target;
      }
      // @ts-ignore
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick();
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        // @ts-ignore
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: (e:any) => start(e),
    onTouchStart: (e:any) => start(e),
    onMouseUp: (e:any) => clear(e),
    onMouseLeave: (e:any) => clear(e, false),
    onTouchEnd: (e:any) => clear(e)
  };
};

const isTouchEvent = (event:any) => {
  return "touches" in event;
};

const preventDefault = (event:any) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};
export default useLongPress