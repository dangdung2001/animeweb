import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { AccessTokenFromRefreshToken, getUserByToken } from "~/services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleTokenCkeck = async () => {
      const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp > currentTime) {
          // fetch api 
          fetchUserDetails()
        } else {
          // use refresh token 
          const isRefreshToken = localStorage.getItem('isRefreshToken');
          
          if(isRefreshToken){
            fetchAccessToken(token);
          }
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("jwtToken");
        localStorage.removeItem('isRefreshToken')
      }
    }
    }
    handleTokenCkeck();
  }, []);

  const fetchUserDetails = async () => {
    try {
        const user = await getUserByToken();
        console.log(user);
        setUser({ userID : user.userid , email : user.email, fullname : user.name , avatar : user.avatar });
    
      } catch (error) {
      console.error("Error fetching user details:", error);
    } 
  };

  const fetchAccessToken = async (token) => {
    const accessToken =   await AccessTokenFromRefreshToken(token);
    console.log(accessToken);
    
    if(accessToken?.jwt){
      localStorage.setItem("jwtToken", accessToken.jwt)
      const user = accessToken.user;
      setUser({ userID : user.userid , email : user.email, fullname : user.name , avatar : user.avatar });
    }
  }


  const Login = (token , user) =>{
    // login logic here
    // if success, save token to localStorage
    const decoded = jwtDecode(token);
    localStorage.setItem("jwtToken", token);
    // replace with actual user info
    setUser({ userID : user.userid , email : decoded.sub, fullname : user.name , avatar : user.avatar }); 
    console.log(user);
  }

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, Login , logout }}>
      {children}
    </AuthContext.Provider>
  );
};