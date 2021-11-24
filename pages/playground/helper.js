function isProduction(url) {
  return (
    url &&
    (/(api\.deriv\.com|binary\.sx)/i.test(url) ||
      /(staging-api\.deriv\.com)/i.test(url) ||
      /vercel\.app/i.test(url))
  );
}

function isLocal(url) {
  return /\/\/(localhost|127\.0\.0\.1)/.test(url);
}

function getBaseUrl() {
  const url = document.location.href;
  return (
    (isProduction(url) || isLocal(url) ? "" : "/" + url.split("/")[3]) + "/"
  );
}

export function getJsonPaths(method_name) {
  const url_path = getBaseUrl() + "config/v3/" + method_name + "/";
  return {
    send: url_path + "send.json",
    receive: url_path + "receive.json",
    example: url_path + "example.json",
  };
}
