#!/bin/sh
ng build angular-element --configuration production --output-hashing none && cat dist/angular-element/runtime.js dist/angular-element/polyfills.js dist/angular-element/main.js > distributable/angular-element.js

# ng build angular-element 
# mv dist/angular-element/main.js demo/angular-element.js
