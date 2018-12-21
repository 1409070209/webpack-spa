// import './bind-apply'
// import './promise'
import FastClick from './FastClickDemo'

FastClick(document.body)
const div = document.createElement('div')
div.innerText = 'this is a div'
document.body.appendChild(div)

let start
div.addEventListener('touchend', function (e) {
    start = +new Date()
    console.log(start)
})

div.addEventListener('click', function (e) {
    const date = +new Date()
    console.log(date, date - start)
})
