let id = parseInt(window.localStorage.getItem("idMax") || "0");
let idR = parseInt(window.localStorage.getItem("idMaxR") || "0");
const createId = (): number => {
  id += 1;
  window.localStorage.setItem("idMax", JSON.stringify(id));
  return id;
};
const createIdR = (): number => {
  idR += 1;
  window.localStorage.setItem("idMaxR", JSON.stringify(idR));
  return idR;
};

export {createId, createIdR};