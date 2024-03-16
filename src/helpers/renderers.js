export const camleCase = (text) => {
 const formated =  text.replace(/([A-Z])/g, " $1").trim();
  return formated.charAt(0).toUpperCase() + formated.slice(1);
};
