import { toGateway } from "./gateways.js";
import { loadGateway, saveGateway } from "./storage.js";

const gatewaySelect = document.getElementById("gatewaySelect");
const customGateway = document.getElementById("customGateway");
const input = document.getElementById("ipfsInput");
const button = document.getElementById("goButton");
const errorMsg = document.getElementById("errorMsg");

function showError(msg) {
  errorMsg.textContent = msg;
}

function redirect() {
  showError("");
  const raw = input.value.trim();
  if (!raw) return showError("URL cannot be empty.");

  const isCustom = gatewaySelect.value === "custom";
  const gateway = isCustom ? customGateway.value.trim() : gatewaySelect.value;

  const result = toGateway(raw, gateway, isCustom);
  if (result.url) {
    window.location.replace(result.url);
  } else {
    showError(result.error);
  }
}

gatewaySelect.addEventListener("change", () => {
  const isCustom = gatewaySelect.value === "custom";
  customGateway.hidden = !isCustom;

  saveGateway({
    type: isCustom ? "custom" : "preset",
    url: isCustom ? customGateway.value : gatewaySelect.value,
  });
});

button.addEventListener("click", redirect);
input.addEventListener("keydown", (e) => e.key === "Enter" && redirect());

// init
const saved = loadGateway();
if (saved?.type === "custom") {
  gatewaySelect.value = "custom";
  customGateway.hidden = false;
  customGateway.value = saved.url;
}
