
function validateAndSubmit(form) {
  var email = form.querySelector('[name=email]').value,
      confirm = form.querySelector('[name=confirm]').value

  if( email === confirm ) return serializerAndSubmit(form)

  alert('Email and Confirm Email must match')
  return false
}

function serializerAndSubmit(form) {
  var inputs = form.querySelectorAll('input, textarea, select'),
      data = { key: 'HFWiBqPHbwkh6euyRbojr.aWhRYKfWwroEPaAip2' }

  for (var i = inputs.length - 1; i >= 0; i--) {
    data[inputs[i].getAttribute('name')] = inputs[i].value
  }

  form.querySelector('button, input[type=submit]').setAttribute('disabled', true)

  tinyPOST('https://mail.scottduncombe.com/', data, function(resp, error) {
    form.querySelector('button, input[type=submit]').setAttribute('disabled', null)
    alert(error ? 'Something has gone wrong - please try again' : 'Your message has been sent')
  })

  return false
}
