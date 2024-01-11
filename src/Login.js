const Login = () => {
  return (
    <>
      <div id="Secound_box">
        <div id="Secound_first_box">
          <div id="input_box_div" >
            <div id="logo_img">
              <img src="./Screenshot_2024-01-03_153329-removebg-preview.png" alt="" />
              <h1>MobiHub</h1>
            </div>
            <h1 id="Wel_come">Welcome Back</h1>
            <div id="google_box">
              <div>
                <img src=" ./google logo.png" alt="" />
              </div>
              <h1 id="Log_h1">Log in with google</h1>
            </div>
            <div id="Line_with_email">
              <p>_____</p>
              <h5>Or Log in With Email</h5>
              <p>_____</p>
            </div>
            <div id="Email_input">
              <span>Email Address</span><br />
              <input type="text" placeholder="   Email Address" />
            </div>
            <div id="Pwd_input">
              <span>Password</span><br />
              <input type="text" placeholder="   Password" />
            </div>
            <div id="keep_box">
              <div></div>
              <p id="Keep_line_box">Keep me logged in </p>
              <p id="Forgot_pwd">Forgot your Password</p>
            </div>
            <button id="Login_btn">
              <h1>Log in</h1>
            </button>

            <div id="Dont_acco">
              <h1>Don't have an account?  </h1>
              <h2>Sign Up</h2>
            </div>
          </div>
        </div>
        <div id="Secound_sec_box">

          <img src="./mobile img.jpg" alt=" " />


          <img src="./login image.jpg" alt=" " />

        </div>
      </div>
    </>
  );
}

export default Login;