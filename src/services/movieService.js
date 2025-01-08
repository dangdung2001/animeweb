import * as request from '~/untils/httpRequest'


export const getMovie = async () => {

    try {
        const movieRes = await request.get('api/public/movie/getAll')
        return movieRes
    } catch (error) {
        console.error('Error fetching movie:', error)
    }
}