export const addressFormatter = (address: string) => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

export const range = (start: number, end: number) => {
  for (var i = start, list = []; i <= end; list.push(i), i++);
  return list;
};
