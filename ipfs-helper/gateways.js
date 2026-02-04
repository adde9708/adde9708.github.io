import { parseIPFS } from "./utils.js";

export const GATEWAYS = {
  "https://dweb.link/": {
    mode: "path",
    supports: ["ipfs", "ipns"],
  },
  "https://ipfs.io/ipfs/": {
    mode: "fixed-ipfs",
    supports: ["ipfs"],
  },
  "https://ipfs.io/ipns/": {
    mode: "fixed-ipns",
    supports: ["ipns"],
  },
  "https://gateway.pinata.cloud/ipfs/": {
    mode: "fixed-ipfs",
    supports: ["ipfs"],
  },
};

export function toGateway(rawUrl, gateway, isCustom) {
  const parsed = parseIPFS(rawUrl);
  if (!parsed) {
    return { error: "Invalid ipfs:// or ipns:// URL." };
  }

  if (isCustom) {
    if (!/^https?:\/\//.test(gateway)) {
      return { error: "Custom gateway must start with http(s)://" };
    }

    return {
      url: `${gateway.replace(/\/$/, "")}/${parsed.protocol}/${parsed.value}`,
    };
  }

  const meta = GATEWAYS[gateway];
  if (!meta) return { error: "Invalid gateway selected." };

  if (!meta.supports.includes(parsed.protocol)) {
    return { error: "Gateway does not support this protocol." };
  }

  switch (meta.mode) {
    case "path":
      return {
        url: `${gateway.replace(/\/$/, "")}/${parsed.protocol}/${parsed.value}`,
      };
    default:
      return { url: gateway + parsed.value };
  }
}
