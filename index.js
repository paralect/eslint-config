module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "mocha": true,
    "es6": true,
    "node": true,
  },
  "rules": {
    "no-console": 2,
    "no-underscore-dangle": 0,
    "arrow-body-style": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": ["error", { "args": "none" }],
    "react/prefer-stateless-function": 0,
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "**/tests/**",
        "**/*.test.js",
        "**/*.spec.js",
        "**/__tests__/**",
        "webpack.config.js",
        "webpack.config.*.js",
        "gulpfile.js",
        "Gruntfile"
      ],
      "optionalDependencies": true,
    }],
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": true,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": false
      }
    }, {
      "enforceForRenamedProperties": false
    }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "src",
          "node_modules",
          "resources"
        ]
      }
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "globals": {
    "window": true,
  }
};
