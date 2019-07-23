import {
    TOGGLE_COLUMNS,
} from '../constants/'

const propsModifiers = []

export const LayoutPlugin = {
    handleCommand: ( { command: {commandName, args}, state } ) => {
        switch (commandName) {
            case TOGGLE_COLUMNS: {
                return {...state,isOneColumn: args, }
            }
            default :{
                return state
            }
        }
    },
    transformStateProps: (props) =>
        propsModifiers.reduce((p, modifier) => modifier(p), props),
}