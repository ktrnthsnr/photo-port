# react deploy

1. install devDependencies `npm install -D gh-pages`

2. update the package.json add to the top
`"homepage": "https://ktrnthsnr.github.io/photo-port"`

3. update the package.json scripts with

	*   "predeploy": "npm run build",
    *   "deploy": "gh-pages -d build

4. in bash run, `npm run deploy`

5. update the GibHub > Settings website to default to `gh-pages` rather than master