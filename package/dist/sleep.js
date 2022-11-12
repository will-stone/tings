import { toNumber } from "./to-number.js";
function sleep(milliseconds) {
  const input = milliseconds;
  const ms = toNumber(input);
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export {
  sleep
};
