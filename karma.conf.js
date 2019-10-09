module.exports = function(config) {
  config.set({
      frameworks: ["jasmine", "karma-typescript"],
      files: [
        { pattern: "src/**/*.ts" },
        { pattern: "test/**/*.ts" }
      ],
      preprocessors: {
          "**/*.ts": "karma-typescript" // *.tsx for React Jsx
      },
      reporters: ["progress", "karma-typescript"],
      karmaTypescriptConfig: {
        compilerOptions: {
            allowJs: true,
        },
    },
      browsers: ["Chrome"]
  });
};