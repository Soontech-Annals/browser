export type SiteConfig = {
  lfsExtensions: string[];
  siteName: string;
  siteDescription: string;
  pageDescriptions: {
    archives: string;
    dictionary: string;
    dictionaryExampleEntry: string;
  };
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
const siteOrigin = "https://soontech.org";
// Set to "/viewer" (or "" for root) depending on where the site is hosted.
const basePath = normalizeBasePath("browser");
const assetPrefix = basePath || undefined;
const siteUrl = `${siteOrigin.replace(/\/+$/, "")}${basePath || ""}`;

export const siteConfig: SiteConfig = {
  siteName: "Soontech Archive",
  siteDescription: "An archive of encoded storage technologies in Minecraft.",
  pageDescriptions: {
    archives: "Explore the archives for encoded storage designs submitted by the Soontech community.",
    dictionary: "A comprehensive dictionary of encoded tech terms and concepts.",
    dictionaryExampleEntry: "This is an example dictionary entry used for demonstration purposes.",
  },
  logoSrc: `${basePath}/logo.png`,
  basePath,
  assetPrefix,
  siteOrigin,
  siteUrl,
  archiveRepo: {
    owner: "Soontech-Annals",
    repo: "SoonNowArchive",
    branch: "main",
  },
  lfsExtensions: ["mp4", "bin", "zip"],
  repositoryUrl: "https://github.com/Soontech-Annals/SoonNowArchive",
  discordInviteUrl: "https://discord.gg/dkSM2PyzJe",
};
