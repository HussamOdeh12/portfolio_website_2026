import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hussam Odeh — Full Stack Web Developer",
    short_name: "Hussam Odeh",
    description:
      "Portfolio of Hussam Odeh, Full Stack Web Developer specializing in the MERN stack.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#0b0f19",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
