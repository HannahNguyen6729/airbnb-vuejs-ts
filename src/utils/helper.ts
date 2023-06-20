export const createNumberArray = (start: number, end: number): number[] => {
  const list: number[] = [];
  for (let i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
};
