import {
    INPUT_CHANGE,
} from '../constants/'

const propsModifiers = []

export const SearchBoxPlugin = {
    handleCommand: ( { command: {commandName, args}, state } ) => {
        switch (commandName) {
            case INPUT_CHANGE: {
                console.log(2)
                return {...state,searchedGif: args, }
            }
        }
        return state
    },
    transformStateProps: (props) =>
        propsModifiers.reduce((p, modifier) => modifier(p), props),
}