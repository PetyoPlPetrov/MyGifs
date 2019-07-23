import {
    INPUT_CHANGE,
} from '../constants/'

const propsModifiers = []

export const SearchBoxPlugin = {
    handleCommand: ({ command: { commandName, args }, state }) => {
        switch (commandName) {
            case INPUT_CHANGE: {
                return { ...state, searchedGif: args, }
            }
            default : {
                return state
            }
        }
    },
    transformStateProps: (props) =>
        propsModifiers.reduce((p, modifier) => modifier(p), props),
}