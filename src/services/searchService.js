import PropTypes from 'prop-types'
import * as request from '~/untils/httpRequest'

const searchService = async (q, type = 'less') => {
  try {
    const searchRsl = await request.get('users/search', {
      params: {
        q,
        type,
      },
    })
    return searchRsl.data
  } catch (error) {
    console.log(error)
  }
}

searchService.propTypes = {
  q: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export { searchService }
