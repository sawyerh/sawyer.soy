export function getHostFromURL(url: string) {
  return new URL(url).host.replace("www.", "");
}
