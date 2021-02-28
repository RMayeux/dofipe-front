export const addSpaceToString = string => {
  return string
    .replace(" ", "")
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
