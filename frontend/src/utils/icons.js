import * as Icons from "lucide-react";

/** The backend stores icons as lucide-react icon NAMES (plain strings,
 * since a database can't store a React component). This maps a name back
 * to the actual component, falling back to a generic document icon. */
export function iconByName(name) {
  return Icons[name] || Icons.FileText;
}
