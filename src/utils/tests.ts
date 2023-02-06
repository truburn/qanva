export const getByTag = (name: string) => {
  return (role: string, el: Element | null) => el?.tagName.toLowerCase() === name;
};

export const getById = (id: string) => {
  return (role: string, el: Element | null) => el?.id === id;
};
