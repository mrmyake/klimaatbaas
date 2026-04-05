export function utmLink(url: string, source: string, content: string): string {
  return `${url}?utm_source=${source}&utm_medium=website&utm_content=${content}`;
}
