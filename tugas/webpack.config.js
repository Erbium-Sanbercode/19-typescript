import { resolve } from 'path';

export const entry = {
  tasks: './webapp/src/tasks/main.js',
  worker: './webapp/src/worker/main.js',
  performance: './webapp/src/performance/main.js',
};
export const output = {
  path: resolve(__dirname, 'www'),
  filename: '[name].js',
};
export const devtool = 'inline-source-map';
export const devServer = {
  contentBase: './webapp//www',
  port: 7000,
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.yaml$/,
      use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }],
    },
    {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
};
