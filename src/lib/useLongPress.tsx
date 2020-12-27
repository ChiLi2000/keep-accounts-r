// 长按功能

let longPressItemTimeOut: NodeJS.Timer | null = null;
const onItemTouchStart = (fn: () => void) => {
  longPressItemTimeOut = setTimeout(() => onLongPressItem(fn), 500);
};
const onLongPressItem = (fn: () => void) => {
  fn();
};
const onItemTouchEnd = (fn: () => void) => {
  clearTimeout(longPressItemTimeOut as NodeJS.Timeout);
  fn();
};

export {onItemTouchStart, onItemTouchEnd};