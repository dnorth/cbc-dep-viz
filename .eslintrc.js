module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "indent": ["error", 2],
    "react/react-in-jsx-scope": "off"
  },
  "env": {
    "browser": true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
