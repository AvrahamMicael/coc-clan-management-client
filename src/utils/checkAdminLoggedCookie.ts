const checkAdminLoggedCookie = (): boolean => {
  const cookieValue: string = document.cookie.replace(/(?:(?:^|.*;\s*)adminLogged\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  return cookieValue != '';
};

export default checkAdminLoggedCookie;
