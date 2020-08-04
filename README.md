# react
Setting Up Your React, Webpack, Babel and NodeJS Environment

## All steps require to setup webpack are found on the webpack official page 

https://webpack.js.org/guides/getting-started/

## Initialize project as Node project 

npm init -y

## Start Installing  Webpack

npm install webpack webpack-cli --save-dev

## Configure webpack

Create file webpack.config.js

And a the config code


const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

## Configure package.json TO have Webpack as entry configuration for the application
 {
 "main": "webpack.config.js",
 }

 ### Configure package.json run scripts for Webpack build and server

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server --open"
  },


  ## Install babel

  npm install --save-dev @babel/core @babel/cli @babel/preset-env

  ## Create babel.config.js file and add the preset-env and preset-react presets

  module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}


## To run your application you would need webpack server

### Install webpack 

npm install --save-dev webpack-dev-server

### Configure app to start server

Add the following lines in the scripts section of package.json file

    "start": "webpack-dev-server --open"


## When building you files you would want the index.html file to be inside the build folder
## this is for deployment to do this let us install HtmlWebpackPlugin

npm install --save-dev html-webpack-plugin


## Now lests stall the html-loader to load the index.html file

npm install --save-dev html-loader

## Add the following to webpack.config.js so that the build generates both the bundle and the index.html page

const HtmlWebpackPlugin = require('html-webpack-plugin');

module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
  


  ## Now lets add our react dependencies so that our application understands JSX code

### For createing react components 
  npm install --save create-react-class

npm install --save react
npm install --save react-dom
npm install --save react-router-dom

