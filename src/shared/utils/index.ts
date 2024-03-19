export const transformText = (text: string) => {
  return text.split(" ").splice(0, 10).join(" ") + "...";
};
