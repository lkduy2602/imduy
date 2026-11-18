import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { fontData, experimental_getFontFileURL } from "astro:assets";
import satori from "satori";
import sharp from "sharp";
import { getFontPathByWeight } from "@/utils/getFontPathByWeight";
import { getPostSlug } from "@/utils/getPostPaths";
import { postFilter } from "@/utils/postFilter";
import config from "@/config";

export async function getStaticPaths() {
  if (!config.features.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("posts").then(p =>
    p.filter(post => postFilter(post) && !post.data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: getPostSlug(post.id, post.filePath) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props, url }) => {
  if (!config.features.dynamicOgImage) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }

  const fonts = fontData["--font-be-vietnam-pro"];
  const regularFontPath = getFontPathByWeight(fonts, 400);
  const boldFontPath = getFontPathByWeight(fonts, 700);

  if (regularFontPath === undefined || boldFontPath === undefined) {
    throw new Error("Cannot find the font path.");
  }

  const [regularData, boldData] = await Promise.all([
    fetch(experimental_getFontFileURL(regularFontPath, url)).then(res =>
      res.arrayBuffer()
    ),
    fetch(experimental_getFontFileURL(boldFontPath, url)).then(res =>
      res.arrayBuffer()
    ),
  ]);

  const dPath =
    "M35 38 C35 34.686 37.686 32 41 32 H61 C78.673 32 93 46.327 93 64 C93 81.673 78.673 96 61 96 H41 C37.686 96 35 93.314 35 90 Z M49 48 C49 46.895 49.895 46 51 46 H61 C70.941 46 79 54.059 79 64 C79 73.941 70.941 82 61 82 H51 C49.895 82 49 81.105 49 80 Z";

  const tags = (props.data.tags || []).slice(0, 4);

  const svg = await satori(
    {
      key: null,
      type: "div",
      props: {
        style: {
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, rgba(56, 189, 248, 0.22) 0%, rgba(37, 99, 235, 0.10) 35%, transparent 65%), radial-gradient(circle at 10% 90%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
          padding: "36px",
          fontFamily: "Be Vietnam Pro",
          color: "#ffffff",
          boxSizing: "border-box",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "rgba(18, 18, 23, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                padding: "46px 54px",
                boxSizing: "border-box",
                position: "relative",
              },
              children: [
                // Top border highlight
                {
                  type: "div",
                  props: {
                    style: {
                      position: "absolute",
                      top: "0px",
                      left: "20%",
                      right: "20%",
                      height: "2px",
                      backgroundImage:
                        "linear-gradient(90deg, transparent 0%, #38bdf8 50%, transparent 100%)",
                    },
                  },
                },
                // Header
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "18px",
                          },
                          children: [
                            {
                              type: "div",
                              props: {
                                style: {
                                  width: "52px",
                                  height: "52px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: "14px",
                                  backgroundColor: "#141419",
                                  border: "1px solid rgba(56, 189, 248, 0.35)",
                                },
                                children: [
                                  {
                                    type: "svg",
                                    props: {
                                      viewBox: "0 0 128 128",
                                      width: "36",
                                      height: "36",
                                      children: [
                                        {
                                          type: "path",
                                          props: {
                                            d: dPath,
                                            fill: "#38bdf8",
                                            fillRule: "evenodd",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: "span",
                              props: {
                                style: {
                                  fontSize: "28px",
                                  fontWeight: 700,
                                  color: "#ffffff",
                                },
                                children: config.site.title,
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  backgroundColor: "rgba(56, 189, 248, 0.08)",
                                  border: "1px solid rgba(56, 189, 248, 0.25)",
                                  borderRadius: "20px",
                                  padding: "4px 14px",
                                  fontSize: "15px",
                                  color: "#38bdf8",
                                },
                                children: new URL(config.site.url).hostname,
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "20px",
                            padding: "6px 16px",
                          },
                          children: [
                            {
                              type: "div",
                              props: {
                                style: {
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  backgroundColor: "#38bdf8",
                                },
                              },
                            },
                            {
                              type: "span",
                              props: {
                                style: {
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  color: "#a1a1aa",
                                },
                                children: "Article",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                // Post Title Content
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "16px",
                      marginBottom: "16px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "14px",
                          },
                          children: [
                            {
                              type: "span",
                              props: {
                                style: {
                                  fontSize: "18px",
                                  fontWeight: 600,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "#38bdf8",
                                },
                                children:
                                  props.data.author || config.site.author,
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            fontSize: props.data.title.length > 50 ? "48px" : "58px",
                            fontWeight: 800,
                            lineHeight: "1.2",
                            letterSpacing: "-0.03em",
                            color: "#ffffff",
                            maxHeight: "220px",
                            overflow: "hidden",
                          },
                          children: props.data.title,
                        },
                      },
                    ],
                  },
                },
                // Footer
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: "22px",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          },
                          children: tags.map((tag: string) => ({
                            type: "div",
                            props: {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                borderRadius: "6px",
                                padding: "6px 14px",
                                fontSize: "14px",
                                color: "#cbd5e1",
                              },
                              children: `#${tag}`,
                            },
                          })),
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#38bdf8",
                          },
                          children: [
                            {
                              type: "span",
                              props: {
                                children: new URL(config.site.url).hostname,
                              },
                            },
                            {
                              type: "span",
                              props: {
                                style: { fontSize: "18px" },
                                children: "↗",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: [
        {
          name: "Be Vietnam Pro",
          data: regularData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Be Vietnam Pro",
          data: boldData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(pngBuffer), {
    headers: { "Content-Type": "image/png" },
  });
};
