import axios from "axios"

const apiShortLink = axios.create({
  baseURL: 'https://api.shrtco.de/v2/'
})

export default apiShortLink 