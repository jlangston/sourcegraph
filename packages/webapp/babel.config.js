// @ts-check

/** @type {import('@babel/core').TransformOptions} */
const config = {
  plugins: ['@babel/plugin-syntax-dynamic-import', 'babel-plugin-lodash'],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        modules: false,
        // Must match "browserslist" from packages/webapp/package.json
        targets: ['last 1 version', '>1%', 'not dead', 'not <0.25%', 'last 1 Chrome versions', 'not IE > 0'],
      },
    ],
  ],
}

module.exports = config
