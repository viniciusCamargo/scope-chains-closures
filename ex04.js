function foo () {
  var bar
  quux = 'oi'
  function zip () {
    var quux = 'oi2'
    bar = true
  }

  return zip
}