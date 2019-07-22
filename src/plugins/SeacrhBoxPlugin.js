import {
    INPUT_CHANGE,
} from '../constants/'

const propsModifiers = []

export const SearchBoxPlugin = {
    handleCommand: (e) => {
        const { command: {commandName, args}, state,props } = e
        switch (commandName) {
            case INPUT_CHANGE: {
                console.log(2)
                return {...state,searchedGif: args, }
            }
        }
        return state
    },

    transformProps: (props) =>
        propsModifiers.reduce((p, modifier) => modifier(p), props),
}