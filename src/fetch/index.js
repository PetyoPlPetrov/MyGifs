
export const fetchGifs = ({query,offset, limit}) =>
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${query}&limit=${limit}&offset=${offset}&rating=G&lang=en`)

export const getGifs =  ({query, offset, limit}) => fetchGifs({query, offset, limit})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export const loadGifs = async ({query,offset, limit}) => {
    const gifs = await getGifs({query: query|| 'dogs',limit, offset})
    const {data} = await gifs.json()
    await sleep(3000)
    return data
}
