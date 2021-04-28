// action creator that recieves the form data as an object

export const updateLoginForm = formData => {
  return {
    type: "UPDATE_LOGIN_FORM",
    payload: formData
  }
}