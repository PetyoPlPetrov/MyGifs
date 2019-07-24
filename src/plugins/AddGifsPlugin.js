import {
    mergeDeepRight,
    objOf,
    compose,
    map,
    lensPath,
    view,
    curry
} from 'ramda'
import {
    LOADING,
    RESET_GIFS,
    SET_GIFS,
    SET_OFFSET
} from '../constants/'

const mapDeepPath = curry((desc, obj) => map(path => view(lensPath(path), obj), desc))

const mapProperties = mapDeepPath({
    title: ['title'],
    url: ['images', 'preview_gif', 'url'],
})

const mapUrlToGifs = ({ urls, ...rest }) => compose(mergeDeepRight(rest), objOf('urls'), map(mapProperties))(urls)

const propsModifiers = [mapUrlToGifs]

export const AddGifs = {
    handleCommand: ({ command, state, }) => {
        switch (command.commandName) {
            case SET_GIFS: {
                return { ...state, initialPageState: false, urls: state.urls.concat(command.args) }
            }
            case SET_OFFSET: {
                return { ...state, offset: command.args }
            }
            case LOADING: {
                return { ...state, loading: command.args }
            }
            case RESET_GIFS: {
                return { ...state, urls: [], initialPageState: true }
            }
            default : {
                return state
            }
        }
    },

    transformStateProps: (props) =>
        propsModifiers.reduce((p, modifier) => modifier(p), props),
}




