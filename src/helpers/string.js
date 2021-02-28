export const addSpaceToString = string => {
  console.log({string})
  return string
    .replace(" ", "")
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
