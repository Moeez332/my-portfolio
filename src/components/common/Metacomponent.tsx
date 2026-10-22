import { useEffect } from "react";

type MetaProps = {
  meta: {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    siteName?: string;
    keywords?: string;
    publisher?: string;
    robots?: string;
  };
};

export default function MetaComponent({ meta }: MetaProps) {
  useEffect(() => {
    document.title = meta.title;

    const setMeta = (attrs: Record<string, string>) => {
      const { name, property, content, ...rest } = attrs;
      const selector = property
        ? `property="${property}"`
        : `name="${name}"`;
      let el = document.querySelector<HTMLMetaElement>(`[${selector}]`);
      if (!el) {
        el = document.createElement("meta");
        if (property) el.setAttribute("property", property);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      Object.entries(rest).forEach(([key, value]) => {
        el!.setAttribute(key, value);
      });
      el!.setAttribute("content", content ?? "");
    };

    setMeta({ name: "description", content: meta.description ?? "" });
    setMeta({ name: "keywords", content: meta.keywords ?? "" });
    setMeta({ name: "publisher", content: meta.publisher ?? "" });
    setMeta({ name: "robots", content: meta.robots ?? "index, follow" });

    setMeta({ property: "og:type", content: meta.type ?? "website" });
    setMeta({ property: "og:url", content: meta.url ?? "https://portfolio-moeex.vercel.app/" });
    setMeta({ property: "og:site_name", content: meta.siteName ?? "Moeez Ahmad Portfolio" });
    setMeta({ property: "og:title", content: meta.title });
    setMeta({ property: "og:description", content: meta.description ?? "" });
    setMeta({ property: "og:image", content: meta.image ?? "/assets/images/hero.png" });

    setMeta({ name: "twitter:card", content: "summary_large_image" });
    setMeta({ name: "twitter:title", content: meta.title });
    setMeta({ name: "twitter:description", content: meta.description ?? "" });
    setMeta({ name: "twitter:image", content: meta.image ?? "/assets/images/hero.png" });

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = meta.url ?? "https://portfolio-moeex.vercel.app/";
  }, [
    meta.title,
    meta.description,
    meta.image,
    meta.url,
    meta.type,
    meta.siteName,
    meta.keywords,
    meta.publisher,
    meta.robots,
  ]);
  return <></>;
}
