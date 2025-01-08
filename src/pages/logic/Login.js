import React, { useContext, useState } from "react";
import * as Yup from "yup";
import classnames from "classnames/bind";
import style from "./login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faMicrophone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/component/button";
import { LoginRequest } from "~/services";
import { AuthContext } from "~/context/AuthContext";

const cx = classnames.bind(style);

export default function Login() {

  const { user , Login } = useContext(AuthContext);

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errorMess, setErrorMess] = useState("");

  const navigate = useNavigate();
  

  const emailSchema = Yup.string()
    .email("Email không hợp lệ")
    .required("Email là bắt buộc");

    const PasswordSchema = Yup.string()
    .min( 6 ,"Mật khẩu tối thiểu 6 kí tự")
    .max(30, "Mật khẩu tối đa 30 kí tự")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
    //   "Mật khẩu chứa ít nhất 1 kí tự in hoa, kí tự đặc biệt")
    .required("Mật khẩu là bắt buộc");

    const handleBlurEmail = async () => {
      try {
        await emailSchema.validate(Email);
        setEmailError(""); 
      } catch (err) {
        setEmailError(err.message); 
      }
    };

    const handleBlurPassword = async () => {
      try {
        await PasswordSchema.validate(password);
        setPasswordError("");
      } catch (err) {
        setPasswordError(err.message);
      }
    };

    const togglePasswordVisibility = () =>{
      setShowPassword(!showPassword);
    }

    const toggleRemember = (e) =>{
      if(e.target.checked === true){
        setRemember(true);
      }
      else{
        setRemember(false);
      }
    }

  const handleEmailinput = (e) => {
    setEmailError("");
    setEmail(e.target.value.trim());
  }
  const handlePasswordInput = (e) => {
    setPasswordError("");
    setPassword(e.target.value.trim());
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      await emailSchema.validate(Email);
      setEmailError(""); 
    } catch (err) {
      setEmailError(err.message);
      return;
    }

    try {
      await PasswordSchema.validate(password);
      setPasswordError("");
    } catch (err) {
      setPasswordError(err.message);
      return;
    }

    // logic login
    LoginRequest(Email, password , remember)
      .then(data => {
        localStorage.setItem('jwtToken', data.jwt);

        if(data?.refreshToken?.token){
          localStorage.setItem('isRefreshToken', true);
        }
        Login(data.jwt , data.user);
        navigate("/");
      })
      .catch(err => {
        setErrorMess("Thông tin tài khoản hoặc mật khẩu không chính xác!");
        console.log(err);
      });


    // reset inputs
    setPassword("");
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("note")}>
        <span>
          LƯU Ý : ĐĂNG NHẬP TÀI KHOẢN GIÚP LƯU LỊCH SỬ XEM VÀ NHẬN THÔNG BÁO
          ANIME MỚI
        </span>
      </div>
      <div className={cx("content")}>
        <h2 className={cx("title")}>ĐĂNG NHẬP</h2>
        <p style={{color : "#de1515"}}>{errorMess}</p>
        <div className={cx("input-wrapper")}>
          <span className={cx("icon")}>
            <FontAwesomeIcon className={cx("font-icon")} icon={faEnvelope} />
          </span>
          <input
            value={Email}
            type="text"
            className={cx("login")}
            placeholder="Email đăng nhập"
            onInput={handleEmailinput}
            onBlur={handleBlurEmail}
          />
          {emailError && <span className={cx("error")}>{emailError}</span>}
        </div>
        <div className={cx("input-wrapper")}>
          <span className={cx("icon")}>
            <FontAwesomeIcon className={cx("font-icon")} icon={faLock} />
          </span>
          <input
            style={{fontSize: '1.4rem'}}
            value={password}
            type={showPassword ? "text" : "password"}
            className={cx("login")}
            placeholder="Mật khẩu"
            onInput={handlePasswordInput}
            onBlur={handleBlurPassword}
          />
          {PasswordError && <span className={cx("error")}>{PasswordError}</span>}
          <Link href="#" className={cx("forgot-password")}>
            Quên mật khẩu?
          </Link>

          <span style={password ? {display: "block"} : {display: "none"}} className={cx('toggerDisplayPassword')}  onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash  : faEye}/>
          </span>

        </div>

        <div className={cx("submit-wrapper")}>
          <div>
            <input
              id="save-pass"
              type="checkbox"
              value="remember me"
              className={cx("save-password")}
              onChange={toggleRemember}
            />
            <label htmlFor="save-password">Lưu mật khẩu</label>
          </div>
          <Button primary onClick={handleSubmit}>Đăng nhập</Button>
        </div>

        <div className={cx("register-wrapper")}>
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </div>
        <div>
          <span className={cx('more')}>Hoặc :</span>
        </div>
        <div className={cx("extention")}>
          <Link to="/oauth/google" className={cx("google-login")}>
            <svg
            className={cx('extention-icon')}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g>
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg>
            Đăng nhập với Google
          </Link>

          <Link to="/oauth/Facebook" className={cx("Face-login")}>
            <svg
              className={cx("extention-icon")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
            </svg>
            Đăng nhập với Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
