const ONE_HOUR: number = 60 * 60;

const createAdminLoggedCookie = (): void => {
  const date: Date = new Date();
  date.setTime(date.getTime() + ONE_HOUR);
  const expires: string = 'expires=' + date.toUTCString();
  document.cookie = `adminLogged=true;${expires};SameSite=strict`;
};

export default createAdminLoggedCookie;
