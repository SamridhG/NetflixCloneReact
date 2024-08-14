export const LABELS={
USERNAME:"User Name",
PASSWORD: "Password",
EMAIL:"Email",
PHONE:"PHONE NO.",
USERNAME_PLACEHOLDER:"example",
PASSWORD_PLACEHOLDER:"Password",
EMAIL_PLACEHOLDER:"example@gmail.com",
PHONE_PLACEHOLDER:"9123456780",
NAME:'Name',
NAME_PLACEHOLDER:'Enter Name',
SIGN_IN:"Sign In",
SIGN_UP:"Sign Up"
}

export const FORM_VALIDATION_MESSAGES={
  REQUIRED:'This is required',
  VALID_EMAIL:'Please enter the valid email',
  VALID_PASSWORD:'Invalid Password'
}
export const VALIDATION_REGEX={
  EMAIL: /^\S+@\S+\.\S+$/,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i,
  NUMBER: /\d+/g,
  USERNAME: /^[a-z0-9]+$/,
}
export const INPUT_TYPE={
  EMAIL:'email',
  PASSWORD:'password',
  PHONE:'phone',
  TEXT:'text'
}

export const LINK={
  LOGIN:'login',
  SIGNUP:'signup'
}
export const STYLE={
  FORM_TITLE:"py-4 my-3 text-6xl font-bold text-center",
  LABEL:"p-1 mt-2 text-3xl font-mono font-bold",
  INPUT:"p-6 my-6 w-full bg-gray-800 text-2xl rounded-lg",
  ERROR:"p-1 text-2xl text-red-700 font-mono font-bold",
  BUTTON:"p-6 my-8 w-full bg-red-700 rounded-lg text-3xl font-semibold"
}