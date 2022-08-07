import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './source/',
      outDir: './dist',
      format: 'esm',
      ext: 'js',
      declaration: true,
    },
    {
      builder: 'mkdist',
      input: './source/',
      outDir: './dist',
      format: 'cjs',
      ext: 'cjs',
    },
  ],
})
