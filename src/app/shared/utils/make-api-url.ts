export const makeApiUrl = (route: string) =>
  `${import.meta.env.VITE_API_URL}/${route}`;
