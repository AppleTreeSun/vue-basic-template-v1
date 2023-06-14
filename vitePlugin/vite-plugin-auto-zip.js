// 自动打包插件
import { resolve } from 'path';
import compressing from 'compressing';

export default function () {
  return {
    name: 'vite-plugin-auto-zip',
    apply: 'build',
    closeBundle: async () => {
      await compressing.zip.compressDir(
        resolve(__dirname, '../dist'),
        resolve(__dirname, '../package/demo.zip')
      )
      console.log('✓ 压缩打包完成');
    }
  }
}