import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json' assert {type: "json"}; //Syntax depends on node version

export default {
    input: 'src/index.js',
    output: [
        {file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true},
        {file: pkg.module, format: 'es', exports: 'named', sourcemap: true},
        {file: pkg.unpkg, format: 'umd', name: 'EmentorComponents', exports: 'named', sourcemap: true,
            globals: {react: 'React', 'react-dom': 'ReactDOM'}
        }
    ],
    plugins: [
        postcss({
            extensions: ['.css'],
            minimize: true
        }),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react']
        }),
    ],
    external: Object.keys(pkg.peerDependencies || {})
};
