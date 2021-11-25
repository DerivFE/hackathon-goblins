import DerivAPIBasic from "@deriv/deriv-api/dist/DerivAPIBasic";

var DEFAULT_APP_ID = 11780;
var DEFAULT_API_URL = "frontend.binaryws.com";
var DEFAULT_LANGUAGE = "EN";
var DEFAULT_BRAND = "deriv";

function getServerUrl() {
  return localStorage.getItem("config.server_url") || DEFAULT_API_URL;
}

function getAppId() {
  return localStorage.getItem("config.app_id") || DEFAULT_APP_ID;
}

function getBrand() {
  return localStorage.getItem("config.brand") || DEFAULT_BRAND;
}

function getLanguage() {
  return DEFAULT_LANGUAGE;
}

const BinarySocketBase = (() => {
  let deriv_api, binary_socket, is_initialized;

  const hasReadyState = (...states) =>
    binary_socket && states.some((s) => binary_socket.readyState === s);

  const getSocketUrl = () =>
    `wss://${getServerUrl()}/websockets/v3?app_id=${getAppId()}&l=${getLanguage()}&brand=${getBrand()}`;

  const isReady = () => hasReadyState(1);

  const isClose = () => !binary_socket || hasReadyState(2, 3);

  const close = () => {
    binary_socket.close();
  };

  const openNewConnection = () => {
    if (isClose()) {
      binary_socket = new WebSocket(getSocketUrl());
      deriv_api = new DerivAPIBasic({
        connection: binary_socket,
      });
    }
  };

  return {
    get: () => {
      if (!is_initialized) {
        openNewConnection();
      }

      return deriv_api;
    },
  };
})();

export default BinarySocketBase;
