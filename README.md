# MyGifs

This repository will present a giff search application. The boilerplate is create-react-app. The implementation use command pattern approach
 and fp concepts via ramda library. The goal is to achieve transactional state management. The different 
 features are separated into plugins. Thus, when needed to add feature,we extend/add the plugin, not the source, in order to achieve Open/Close principle.
 

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
```

#### Commit Message Format
Each commit message consists of a Type of commit, task number+description

#### Type

Must be one of the following:

- **feat**: A new feature
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing or correcting existing tests

## Usage
 1. Search functionality - Type a giff name in the input field and press search button to load giffs. When you scroll to the bottom of the page a loader will
signal the new giffs are being loaded. There is a 3secs additional delay on top of the async request in order to
"enjoy" the loader
 1. Toggle columns functionality - You can toggle the column layout from one to 3 columns layout by pressing "Toggle columns" button

## Authors

- **Petyo Petrov**
