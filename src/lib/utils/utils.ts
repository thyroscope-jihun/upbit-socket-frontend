export const getAverage = (data: number[]) => {
  const sum = data.reduce((acc, price) => acc + price, 0);
  return sum / data.length;
};
