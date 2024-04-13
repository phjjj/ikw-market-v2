module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import"],
  rules: {
    "no-param-reassign": ["error", { props: false }],
    "no-use-before-define": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "import/prefer-default-export": "off",
    "no-multi-str": "off",
  },

  parserOptions: {
    project: `./tsconfig.json`,
  },
};
