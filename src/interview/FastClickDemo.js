import './css/FastClickDemo.css'

/**
 * @see #https://www.jianshu.com/p/05b142d84780
 * @see #https://developer.mozilla.org/zh-CN/docs/Web/API/Event/Event
 * @see #不使用blog中initMousesEvent这个APId的原因是，这个API是一个废弃的API
 * @param dom
 * @constructor
 */
function FastClick(dom) {
    let target
    dom.addEventListener('touchstart', function (e) {
        target = e.target
    })
    dom.addEventListener('touchend', function (e) {
        e.preventDefault()
        const event = new Event('click',
            {bubbles: true, cancelable: false}
        )
        console.log(event)
        event.forwardedTouchEvent = true
        target.dispatchEvent(event)
    })
}

export default FastClick