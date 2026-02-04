const KEY = "selectedGateway";

export function loadGateway() {
  try {
    return JSON.parse(localStorage.getItem(KEY));
  } catch {
    return null;
  }
}

export function saveGateway(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
