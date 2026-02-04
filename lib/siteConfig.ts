export type SiteConfig = {
  lfsExtensions: string[];
  siteName: string;
  siteDescription: string;
  logoSrc: string;
  basePath: string;
  assetPrefix?: string;
  siteOrigin: string;
  siteUrl: string;
  archiveRepo: {
    owner: string;
    repo: string;
    branch: string;
  };
  discordInviteUrl?: string;
  repositoryUrl?: string;
};

const normalizeBasePath = (value: string) => {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  const withLeading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withoutTrailing = withLeading.endsWith("/") ? withLeading.slice(0, -1) : withLeading;
  return withoutTrailing;
};

// Deployment configuration lives here rather than env variables.
const siteOrigin = "https://DuskScorpio.github.io";
// Set to "/viewer" (or "" for root) depending on where the site is hosted.
const basePath = normalizeBasePath("wither");
const assetPrefix = basePath || undefined;
const siteUrl = `${siteOrigin.replace(/\/+$/, "")}${basePath || ""}`;

export const siteConfig: SiteConfig = {
  siteName: "Wither Archive",
  siteDescription: "An archive of Wither technologies in Minecraft.",
  logoSrc: "/logo.png",
  basePath,
  assetPrefix,
  siteOrigin,
  siteUrl,
  archiveRepo: {
    owner: "DuskScorpio",
    repo: "wither-archive",
    branch: "main",
  },
  lfsExtensions: ["mp4", "bin", "zip"],
  repositoryUrl: "https://github.com/DuskScorpio/wither-archive",
  discordInviteUrl: "https://discord.gg/wd594eEtfm",
};
