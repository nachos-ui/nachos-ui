/* eslint-disable */

var _highlight = function() {
  setTimeout(function() {
      var codeEl = [].slice.call(document.querySelectorAll('pre code'))
      codeEl.forEach(function(code) {
      hljs.highlightBlock(code)
    })
  })
}

window.addEventListener('load', function() {
  _highlight()
})

_highlight()
