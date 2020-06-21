import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';


export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      name: 'h4i-design',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'h4i-design',
    },
  ],
  external: ['styled-components', 'react'],
  plugins: [
    peerDepsExternal(),
    copy({
      targets: [
        { src: ['src/static/fonts/hk-grotesk/HKGrotesk-Regular.otf', 'src/static/fonts/hk-grotesk/HKGrotesk-Medium.otf', 'src/static/fonts/hk-grotesk/HKGrotesk-Bold.otf'], dest: 'dist/fonts/hk-grotesk' },
        { src: 'index.d.ts', dest: 'dist/index.d.ts' },
      ],
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      extract: 'styles.css',
    }),
    commonjs(),
  ],
};
