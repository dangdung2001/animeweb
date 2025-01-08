import * as request from '~/untils/httpRequest'


const LoginRequest = async (email, password, remember) => {
    try {
        const JwtResponse = await request.post('api/public/login', {
          email,
          password,
          remember
        })
        return JwtResponse.data
      } catch (error) {
        console.log(error)
      }
}

const AccessTokenFromRefreshToken = async (token) => {
  try {
      const JwtResponse = await request.post('api/public/refresh-token', 
        {
          "AccessToken" : token
        }
      )
      return JwtResponse.data
    } catch (error) {
      console.log(error)
    }
}

export {LoginRequest , AccessTokenFromRefreshToken}