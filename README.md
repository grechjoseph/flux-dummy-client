# Java Flux Testing App

The following app is used to test against event source (Flux).

Mainly we are running against docker instance

# Step 1: Install docker desktop
https://www.docker.com/products/docker-desktop

# Step 2: open command prompt
 run command prompt

# Step 3: run the following commands
docker pull josephgrech90/flux

# Step 4: run the following code to run the docker
docker run -p 8080:8080 josephgrech90/flux

# Step 5: open the following url
http://localhost:8080

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
