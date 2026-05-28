import type { ScriptMetadata } from "@veyra/core";

export function parseCSharpHeader(source: string): ScriptMetadata | null {
  const match = source.match(/^\/\*([\s\S]*?)\*\//);
  if (!match?.[1]) return null;

  const metadata: ScriptMetadata = {
    name: "Unnamed",
    description: "No description provided.",
    tags: []
  };

  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();
    if (key === "name" && value && value !== "null") metadata.name = value;
    if (key === "description" && value && value !== "null") metadata.description = value;
    if (key === "tags" && value && value !== "null") {
      metadata.tags = value.split(",").map((tag) => tag.trim().toLowerCase()).filter(Boolean);
    }
    if (key === "version" && value) metadata.version = value;
  }

  if (metadata.tags.length === 0) metadata.tags = ["no-tags"];
  return metadata;
}
