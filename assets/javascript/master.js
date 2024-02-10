let _fig = document.querySelectorAll('figure')
let _arrow = document.querySelectorAll('span')
let _ul = document.getElementsByTagName('ul')[0]
let _parent = document.getElementsByClassName('parent')[0]
let w = (_fig.length) * 950
let i = 0
_parent.style.width = w + 'px'

if (i == 0) {
    _arrow[0].style.opacity = 0.2

} else {
    _arrow[0].style.opacity = 1

}
if (i == ((_fig.length) - 1)) {
    _arrow[1].style.opacity = 0.2
} else {
    _arrow[1].style.opacity = 1
}



// ....right....

_arrow[1].addEventListener('click', (e) => {
    if (i < (_fig.length) - 1) {
        i++
        _li.forEach((n) => {
            n.style.backgroundColor = 'darkslategrey'
        })
        _li[i].style.backgroundColor = 'bisque'

        _parent.style.transform = 'translateX(' + (-(i * 950)) + 'px)'


    } if (i == 0) {
        _arrow[0].style.opacity = 0.2
    }
    else {
        _arrow[0].style.opacity = 1
    }
    if (i == (_fig.length) - 1) {
        _arrow[1].style.opacity = 0.2
    }
     else {
        _arrow[1].style.opacity = 1
    }
})

// .....left.....

_arrow[0].addEventListener('click', (e) => {
    if (i >= 1) {
        i--
        _li.forEach((n) => {
            n.style.backgroundColor = 'darkslategrey'
        })
        _li[i].style.backgroundColor = 'bisque'
        _parent.style.transform = 'translateX(' + (-(i * 950)) + 'px)'

    }
    if (i == 0) {
        e.target.style.opacity = 0.2

    } else {
        e.target.style.opacity = 1

    }
    if (i == ((_fig.length) - 1)) {
        _arrow[1].style.opacity = 0.2
    } else {
        _arrow[1].style.opacity = 1
    }
})

// .....li.....

_fig.forEach((val) => {
    let c = document.createElement('li')
    _ul.appendChild(c)
})
let _li = document.querySelectorAll('li')
_li.forEach((val, i) => {
    val.addEventListener('click', (e) => {
        _parent.style.transform = 'translateX(' + (-(i * 950)) + 'px)'
        _li.forEach((n) => {
            n.style.backgroundColor = 'darkslategrey'
        })
        e.target.style.backgroundColor = 'bisque'
        if (i == 0) {
            _arrow[0].style.opacity = 0.2

        } else {
            _arrow[0].style.opacity = 1

        }
        if (i == ((_fig.length) - 1)) {
            _arrow[1].style.opacity = 0.2
        } else {
            _arrow[1].style.opacity = 1

        }
    })


})