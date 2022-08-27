import axios from 'axios'

const BASE_URL = `https://youtube-v31.p.rapidapi.com`

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'c0908053bamshb16dd1f756305d4p188010jsna11056b7131d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const fetchFromAPI = async url => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
