import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
    input: './src/index.js',
    output: {
        file: './dist/mvvm.js',
        format: 'umd',
        name: 'Vue',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}