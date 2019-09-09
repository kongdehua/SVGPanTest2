import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

var env = process.env.NODE_ENV
var config = {
    input: "src/main.js",
    output: {
        format: "umd",
        file: "dist/main.js",
        name: "SVGPanTest"
    },
    plugins: [
        nodeResolve({
            // jsnext: true
        }),
        // due to https://github.com/rollup/rollup/wiki/Troubleshooting#name-is-not-exported-by-module
        commonjs({
            include: 'node_modules/**'
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}

if (env === 'production') {
    config.plugins.push(
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    )
}

export default config
