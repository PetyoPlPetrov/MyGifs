# MyGifs

This repository will present giff search application. The boilerplate is create-react-app.

## Setting up the project

1. Clone the repository on master branch(it is the default one)

   - the library source code is located into `src` folder

1. To **install dependencies** execute in the terminal `npm install`


1. To **build the package** execute `npm run build`
1. To **run the tests** execute `npm test`
1. To **start the app** - `npm start`

## Project structure

```
    - project root
        - public
            - html file
        - src
            - common - common command functions
            - components - main components
            - constants - 
            - fetch - functions around async fetch functionality
            - plugins - the functionality is separated into plugiins
            - tests - components tests
        - tests
```

#### Commit Message Format
Each commit message consists of a Type of commit, task number+description

#### Type

Must be one of the following:

- **feat**: A new feature
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing or correcting existing tests

## Documentation
  Type in the input field and press search button. When you scroll to the bottom a a text with loading purpose will
signal the new giffs are loading. There is a 3secs additional delay on top of the async request in order to enjoy
the "loader"

## Authors

- **Petyo Petrov**
