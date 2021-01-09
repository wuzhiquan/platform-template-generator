// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        // config: 'build/webpack.base.conf.js'
        //此处config对应webpack.config.js的路径，我这个路径是vue-cli3默认的路径
        config: "node_modules/@vue/cli-service/webpack.config.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    //"prettier/prettier": "error"
    //don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    "import/no-unresolved": [
      2, { "ignore": ["^@/"] },
    ],
    'no-console': 'off',
    'max-len': ['error', { 'code': 100000 }],
    'global-require': 0,
    "no-plusplus": 'off',
    'linebreak-style': ['off', 'windows'],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': 'off',
    // 'no-param-reassign': ['error', {
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     'state', // for vuex state
    //     'acc', // for reduce accumulators
    //     'e' // for e.returnvalue
    //   ]
    // }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "camelcase": [2, {"properties": "never"}]

  }
}
