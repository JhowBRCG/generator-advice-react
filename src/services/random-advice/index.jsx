export const getRandomAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return await data.slip;
};
