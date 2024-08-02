export function parsingJSON(string) {
  const json = string.replace(/```json/g, "").replace(/```/g, "");
  return JSON.parse(json);
}
