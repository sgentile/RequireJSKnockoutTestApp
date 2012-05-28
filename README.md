This project is provide a sample utilizing the following concepts:

RequireJS/AMD
with KnockoutJs 
included how to use a customBinder (this is all from KnockoutJS website)

Optimization support (ref: http://requirejs.org/docs/optimization.html)

To use be sure to run the following (a package.json will be provided eventually)

npm install requirejs

The command is r.js -o app.build.js   (change to the scripts directory and run from there)

The app.build.js is configured to use Uglify in the output
uncomment //optimize: "none", to not use Uglify and just see it combined

Running the command above will createa a appDirectory-build directory

