export const addTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
};

export const getAuthHeaderValue = () => {
  const token = localStorage.getItem("accessToken");
  return token ? `Bearer ${token}` : "";
};
