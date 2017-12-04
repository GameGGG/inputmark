;(function (win, doc) {
    var domArr = []
    function InputMark (options) {
        this.init(options)
    }
    InputMark.prototype.init = function (opt) {
        if (opt.values) {
            var values = opt.values
            for (var i = 0, l = values.length; i < l; i++) {
                this.createDom(values[i])
            }
        }
    }
    InputMark.prototype.createDom = function (parent) {
        var parentEl = parent.el
        if (typeof parentEl === 'string') {
            parentEl = parentEl.indexOf('#') === 0 ? doc.getElementById(parentEl.replace('#', '')) : doc.querySelector(parentEl)
        }
        var childInput = parentEl.getElementsByTagName('input')[0]
        var parentEl_w = parentEl.offsetWidth
        var parentEl_h = parentEl.offsetHeight 
        var markDom = doc.createElement('div')
        parentEl.style.position = 'relative'
        markDom.style.position = 'absolute'
        markDom.style.top = '0px'
        markDom.style.left = '0px'
        markDom.style.width = parentEl_w + 'px'
        markDom.style.height = parentEl_h + 'px'
        markDom.innerHTML = parent.placeholder || ''
        parentEl.appendChild(markDom)
        this.addEvent(childInput, markDom)
    }
    InputMark.prototype.addEvent = function (inputDom, markDom) {
        markDom.onclick = function (e) {
            inputDom.focus()
            markDom.style.display = 'none'
        }
        inputDom.onblur = function (e) {
            console.log(1)
            var val = this.value
            if (val === '') {
                markDom.style.display = 'block'
            }
        }
    }
    win.InputMark = InputMark
})(window, document)