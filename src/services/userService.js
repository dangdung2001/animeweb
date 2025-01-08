import * as request from '~/untils/httpRequest'


const getuser = async (id) => {
    
}

const getUserByToken = async () => {
  try {
      const JwtResponse = await request.get(`api/users/get`);
      return JwtResponse.data
    } catch (error) {
      console.log(error)
    }
}

export {getUserByToken}