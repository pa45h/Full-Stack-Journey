import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({
  title,
  description1,
  description2,
  img,
  formType,
  setIsLoggedIn,
}) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>
          <span>{description1}</span>
          <span>{description2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>Sign Up With Google</button>
      </div>

      <div>
        <img src={img} width={558} height={504} />
      </div>
    </div>
  );
}

export default Template;
