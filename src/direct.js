export default {
  async get(key) {
    if (key.endsWith(".md")) {
      const name = key.slice(0, -3);
      return `Hello, **${name}**.`;
    }
  },

  async keys() {
    return ["Alice.md", "Bob.md", "Carol.md"];
  },
};
