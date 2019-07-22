import { plugins } from '../plugins/'


export const handleCommand = (command )=> (state,props) => {
    const computed = plugins.reduce(
        (nextState, plugin) =>
            plugin.handleCommand({ command, state: nextState, props }),
        state
    )

    return computed !== state ? computed : null
}

export const processProps = (props) =>
    plugins.reduce((newProps, plugin) => plugin.transformProps(newProps), props)