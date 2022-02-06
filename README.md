# CoinCode review 

1. We can have validation on mongoose schemas
2. It's better to use `KoaJS` instead of `ExpressJS` since it's faster and gives us more flexibility like what we have [here](https://github.com/rasadeghnasab/FillTheTroops/blob/main/routes/api/troops.js)
3. We should add a `logger` module instead of using console.log in the code directly
4. Have to handle uncaughtException and unhandledRejection errors
5. Use `const` or `let` instead of `var`
6. Move controllers functionality to separate files
7. Add gitignore file and fill it with the proper content
8. Add both integration and unit tests. It's best to use TDD approach. [Check here](https://github.com/rasadeghnasab/FillTheTroops/tree/main/tests)
9. Add code-coverage like [this one](https://github.com/rasadeghnasab/FillTheTroops/#tests-)
10. Add config like what we have [here](https://github.com/rasadeghnasab/FillTheTroops/tree/main/config)
11. Try to use less external modules if possible
12. Move dependency modules to `devDependencies` in the package.json
13. Remove unused dependencies from the package.json
14. Always send package.lock to keep all the developers in sync regards to packages versions
15. We can `validations` to the API endpoints. Using [Joi](https://www.npmjs.com/package/express-joi-validation)
