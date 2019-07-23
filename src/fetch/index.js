import {composeP, prop } from 'ramda'

export const fetchGifs = ({query,offset, limit}) =>
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${query}&limit=${limit}&offset=${offset}&rating=G&lang=en`)

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getJson = e => e.json()
const getData = prop(['data'])
export const loadGifs = composeP(getData,getJson, fetchGifs)
