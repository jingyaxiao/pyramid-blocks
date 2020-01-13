import { IConfig } from 'umi-types';

const config: IConfig = {
  plugins: [
    ['umi-plugin-block-dev', {
      layout: process.env.LAYOUT || 'ant-design-pro',
    }],
    ['umi-plugin-react', {
      'antd': true,
    }],
    require.resolve('./plugin'),
  ],
};

export default config;
