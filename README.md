## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
It test React app for crashing and output result function (named m, p, t, custom 1, custom 2 t, custom 2 m).

## About
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as it fast way to build app with React, server and tests.

### Structure 
Main layout is presented in App.js file.
TextInput and CheckboxInput are located in `/components` folder.
App use 'useForm' hook for managing inputs, reading input values and runnir `makeResult` function.

Business-logic is located in `utils/makeResult.js` file, which uses helpers functions from `utils/helpers.js`.

### Logic
MakeResult is pure function with incaplsulated logic. It require one object as parameter. 
```javascript
{
    a: bool,
    b: bool,
    c: bool,
    d: int,
    e: int,
    f: float,
    custom1: bool,
    custom2: bool,
}
```
`MakeResult` function create new instance of `ResultMaker` class and return result of running `make` method.
If `custom1` or `custom2` keys are true, `MakeResult` add new decorator function to decorators array.
`ResultMaker` is class, it accepts same object as `MakeResult` as first parameter and array of decorators.
`MakeResult` check `a`, `b` & `c` keys in accepted object and set predefined function to return calculated result.
If there are any decorator in `decorators` array coming from second argument - `MakeResult` run this decorator.

This approach gives me good scalability - I can add as many decorators as I want.

### Tests
Create React App uses Jest for running tests.
App have a few test for makeResult function. Tests passing object with predefined keys for testing different conditions.