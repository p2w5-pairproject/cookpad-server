let baseUrl = "http://localhost:3000"

$(document).ready(function() {

})

function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token

  $.ajax({
    method: 'post',
    url: `http://localhost:3000/google_login`,
    data: {id_token}
  })
  .done((data) => {
    localStorage.setItem("access_token", data.access_token);
    checkAuth()
  })
  .fail((error) => {
    console.log(error, 'ERRORR EUY');
  })
  .always(() => {

  })
}