# Modular-React-Template

### Easy React template with more modularity 

## Installation 
`git clone https://github.com/muki119/modular-react-template.git`<br />
`cd modular-react-template`<br />
`npm install`

## Commands

`npm run dev` starts development server<br />
`npm run build` builds program<br />
`npm run serve` serves build on port 8080

## Potential problems 
### "Invalid Host Header"
>In the case of a invalid host header add `allowedHosts:'all',` into the `webpack.dev.js` folder in the `devServer` option.

module.exports { <br />
...,<br />
devServer:{<br />
 &nbsp; allowedHosts:'all',<br />
},<br />
...,<br />
}<br />
