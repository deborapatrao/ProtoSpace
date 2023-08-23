let HOST_URL = "http://localhost:8080";

if (process.env.NODE_ENV === "production") {
  HOST_URL = "protospace-production.up.railway.app";
}
// export const HOST_URL = "https://www.gabriecordeiro.ca";
// export const HOST_URL = "http://localhost:8080";

export { HOST_URL };
