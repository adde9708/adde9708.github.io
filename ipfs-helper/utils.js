export function parseIPFS(url) {
  if (url.startsWith("ipfs://")) {
    return { protocol: "ipfs", value: url.slice(7) };
  }
  if (url.startsWith("ipns://")) {
    return { protocol: "ipns", value: url.slice(7) };
  }
  return null;
}
