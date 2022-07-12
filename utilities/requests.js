const api_key = process.env.REACT_APP_API_KEY;

export default {
    fetchTrending: {
        title : 'Trending',
        url : `/trending/all/day?api_key=${api_key}&language=en-US`,
    },
    fetchTopRated: {
        title : 'Top Rated',
        url : `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    },
    fetchActionMovies: {
        title : 'Action',
        url : `/discover/movie?api_key=${api_key}&width_genre=28`
    },
    fetchFantasy: {
        title : 'Fantasy',
        url : `/movie/14/similar?api_key=${api_key}&language=en-US&page=1`
    },
    fetchHorror: {
        title : 'Horror',
        url : `/movie/27/similar?api_key=${api_key}&language=en-US&page=1`
    },
    fetchRomanceMovies: {
        title : 'Romance',
        url : `/movie/10749/similar?api_key=${api_key}&language=en-US&page=1`
    },
    fetchMystery: {
        title : 'Mystery',
        url : `/movie/9648/similar?api_key=${api_key}&language=en-US&page=1`
    },
    fetchWar: {
        title : 'War',
        url : `/movie/10752/similar?api_key=${api_key}&language=en-US&page=1`
    },
    fetchWestern: {
        title : 'Western',
        url : `/movie/878/similar?api_key=${api_key}&language=en-US&page=1`
    },
    fetchAnimation: {
        title : 'Animation',
        url : `/movie/12/similar?api_key=${api_key}&language=en-US&page=1`
    },
    fetchDrama: {
        title : 'Drama',
        url : `/movie/18/similar?api_key=${api_key}&language=en-US&page=1`
    },
}