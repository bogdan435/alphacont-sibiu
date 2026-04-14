import { homeContent as homeContentRo } from "@/content/home-ro";
import { homeContent as homeContentEn } from "@/content/home-en";

export function getHomeContent(locale: string) {
  if (locale === "en") {
    return homeContentEn;
  }

  return homeContentRo;
}
