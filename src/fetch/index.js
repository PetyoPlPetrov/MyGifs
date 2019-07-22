

export const fetchGifs = ({query,offset, limit}) =>
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${query}&limit=${limit}&offset=${offset}&rating=G&lang=en`)

export const getGifs =  ({query, offset, limit}) => fetchGifs({query, offset, limit})

export const loadGifs = async (query) => {
    const gifs = await getGifs({query: query|| 'dogs',limit:10, offset: 10})
    const {data} = await gifs.json()
//    const urls = data.map(e => ({url: e.source}))
   console.log(data)
    return data
}