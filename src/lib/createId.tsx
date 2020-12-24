let idR = parseInt(window.localStorage.getItem("idMaxR") || "0");
const createIdR = (): number => {
  idR += 1;
  window.localStorage.setItem("idMaxR", JSON.stringify(idR));
  return idR;
};

export {createIdR};