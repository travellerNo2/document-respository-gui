const getCookie = (key) => {
  const cookies = document.cookie.split(';');
  let keyValuePair = '';
  cookies.forEach((cookie) => {
    if (cookie.indexOf(key) > -1) {
      keyValuePair = cookie;
      return;
    }
  });
  return keyValuePair.substring(keyValuePair.indexOf('=') + 1) ?? undefined;
};

const setCookie = (key, value) => {
  document.cookie = `${key}=${value}`;
};

export { getCookie, setCookie };
