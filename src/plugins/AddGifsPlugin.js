import {
    LOADING,
    RESET_GIFS,
    SET_GIFS,
    SET_OFFSET
} from '../constants/'

const mapUrlToGifs = ({urls,...rest})=>{
    return {
        ...rest,urls: urls.map(e => ({title: e.title,url: e.images.preview_gif.url}))
    }
}

const propsModifiers = [mapUrlToGifs]

export const AddGifs = {
    handleCommand: ({ command, state, }) => {
        switch (command.commandName) {
            case SET_GIFS: {
                return {...state, urls: state.urls.concat(command.args)}
            }
            case SET_OFFSET: {
                return {...state, offset: command.args}
            }
            case LOADING: {
                return {...state, loading: command.args}
            }
            case RESET_GIFS: {
                return {...state, urls: []}
            }
            default :{
                return state
            }
        }
    },

    transformStateProps: (props) =>
        propsModifiers.reduce((p, modifier) => modifier(p), props),
}




