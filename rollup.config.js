import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/ShuffleText.ts',
  plugins: [
    typescript({
      compilerOptions: {
        declaration: false,
        sourceMap: false
      }
    })
  ],
  output: [
    {
      format: 'umd',
      name: 'ShuffleText',
      file: 'build/shuffle-text.js'
    },
    {
      format: 'es',
      file: 'build/shuffle-text.module.js'
    }
  ]
};
