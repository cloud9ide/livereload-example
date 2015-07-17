# Cloud9 Grunt livereload with static files + sass 

An example of using Grunt to serve your site with live compiling and reloading of your sass/js/html files. It also works out of the box on Cloud9.

The static files are served from port 8080 and livereload runs on port 8081. Workspaces also have port 8082 open if you need it for other purposes. 

## Usage

[Click here to clone this repository in Cloud9](https://c9.io/open/git/?url=git@github.com:cloud9ide/livereload-example.git)


Then in the terminal run:
```
> npm install
> npm start 
```

Click Preview -> Preview running application in Cloud9

Then modify the style.scss, script.js or index.html files and watch it compile and apply the changes to your page in real time!