call npx rollup .\src\main.js --file ./dist/bundle-iife.js --format iife --name myBundle
call npx rollup .\src\main.js --file ./dist/bundle1-cjs.js --format cjs
call npx rollup .\src\main.js --file ./dist/bundle1-umd.js --format umd --name myBundle
call npx rollup .\src\main.js --file ./dist/bundle1-esm.js --format esm
