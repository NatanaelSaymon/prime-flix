//base da url: https://api.themoviedb.org/3
//url: /movie/now_playing?api_key=302f4c804ba1620ae1281c6dd6314a7c&language=pt-BR

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api