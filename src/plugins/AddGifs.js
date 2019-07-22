import { SET_GIFS } from '../constants/'

const mapUrlToGifs = ({urls})=>({
    urls: urls.map(e => ({title: e.title,url: e.images.preview_gif.url}))
})
const propsModifiers = [mapUrlToGifs]

export const AddGifs = {
    handleCommand: ({ command, state, }) => {
        switch (command.commandName) {
            case SET_GIFS: {
                return {...state, urls: command.args}
            }
        }
        return state
    },

    transformProps: (props) =>
        propsModifiers.reduce((p, modifier) => modifier(p), props),
}




