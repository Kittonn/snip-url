export const sliceUrl = (url: string) => {
  return url.length > 30 ? url.slice(0, 30) + "..." : url;
};
