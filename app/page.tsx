import { HeaderBar } from "@/components/layout/HeaderBar";
import { Footer } from "@/components/layout/Footer";
import { LegacyRedirect } from "@/components/home/LegacyRedirect";
import { siteConfig } from "@/lib/siteConfig";
import { PillarCard } from "@/components/home/PillarCard";

export default function Home() {
  const pillars = [
    {
      title: "A curated archive",
      body: "The latest designs annotated with documentation so you can find inspiration fast.",
      href: "/archives",
      cta: "Browse the archive",
    },
    {
      title: "Discord community",
      body: "Join our Discord to connect with other wither tech enthusiasts and get help from experts.",
      href: siteConfig.discordInviteUrl ?? "#",
      cta: "Join the Discord",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <LegacyRedirect />
      <HeaderBar
        siteName={siteConfig.siteName}
        view="home"
        logoSrc={siteConfig.logoSrc}
        discordInviteUrl={siteConfig.discordInviteUrl}
      />

      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          
          <div className="px-6 py-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
              Welcome to the Wither Archive
            </p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Break Blocks Better</h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-900 dark:text-gray-200">
              Use wither tech to automate block breaking and item collection in Minecraft without using TNT. Explore community-submitted designs, join our Discord, and take your wither tech skills to the next level.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Find exactly what you need</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
