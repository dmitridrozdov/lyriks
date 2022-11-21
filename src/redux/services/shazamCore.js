import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df6dbe4c2emsh96b91ea5b45846cp18dcbfjsn3f3462d59ca3',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  }
  
fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
})