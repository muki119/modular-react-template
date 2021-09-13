# Modular-React-Template

### Easy React template with more modularity 

## Installation 
`git clone https://github.com/muki119/modular-react-template.git`<br />
`cd modular-react-template`<br />
`npm install`

## Commands

`npm run dev` starts development server<br />
`npm run buid` builds program

## Potential problems 
### "Invalid Host Header"
>In the case of a invalid host header add `allowedHosts:'all',` into the `webpack.config.js` folder in the `devServer` option.

module.exports { <br />
...,<br />
devServer:{<br />
 &nbsp; allowedHosts:'all',<br />
},<br />
...,<br />
}<br />
