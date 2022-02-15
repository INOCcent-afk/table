export const getTableHeadsDesktop = (data) => {
  return Object.keys(data.data[0]).filter((x) => x !== "id");
};

export const getTableHeadsMobile = (data) => {
  return Object.keys(data.data[0])
    .filter((x) => x !== "id")
    .slice(0, 1);
};
