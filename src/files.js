import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = fileURLToPath(new URL("markdown", import.meta.url));

export default {
  async get(key) {
    if (!key) {
      return undefined;
    }
    const filename = path.resolve(dirname, key);
    try {
      return await fs.readFile(filename); // Return file contents
    } catch (error) {
      if (error.code === "ENOENT") {
        return undefined;
      }
      throw error;
    }
  },

  async keys() {
    return fs.readdir(dirname);
  },
};
