import { plugins } from '../plugins/'
import {
    INPUT_CHANGE,
    RESET_GIFS,
    SET_GIFS
} from '../constants'

export const handleCommand = (command )=> (state,props) => {
    const computed = plugins.reduce(
        (nextState, plugin) =>
            plugin.handleCommand({ command, state: nextState, props }),
        state
    )

    return computed !== state ? computed : null
}

export const processProps = (props) =>
    plugins.reduce((newProps, plugin) => plugin.transformStateProps(newProps), props)

export const createSetSearchedGifsCommand = (args) => ({
    commandName: SET_GIFS,
    args
})

export const createResetGifsCommand = () => ({
    commandName: RESET_GIFS,
})

export const createInputChangeCommand = (args) => ({
    commandName: INPUT_CHANGE,
    args
})

export const createParamsCommand = commandName=> (args) => ({
    commandName,
    args
})