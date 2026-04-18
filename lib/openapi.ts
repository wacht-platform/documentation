import { readdirSync } from 'node:fs';
import path from 'node:path';
import { createOpenAPI } from 'fumadocs-openapi/server';

function collectSpecs(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return collectSpecs(fullPath);
      }

      if (entry.isFile() && /\.(ya?ml|json)$/i.test(entry.name)) {
        return [fullPath];
      }

      return [];
    })
    .sort((left, right) => left.localeCompare(right));
}

const apiSpecRoot = path.join(process.cwd(), 'api-specs');

export const openapi = createOpenAPI({
  input: collectSpecs(apiSpecRoot),
});
