const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 1.5

class Player {
    constuctor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.velocity.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }

}

const player = new Player()
player.draw()

function animate() {
    requestAnimationFrame(animate)
    console.log('go')
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}
animate()
addEventListener('keydown', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left')
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            player.velocity.x = 1
            break

        case 87:
            console.log('up')
            player.velocity.y = 20
            break
    }
})

addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left')
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            player.velocity.x += 0
            break

        case 87:
            console.log('up')
            player.velocity.y = 20
            break


    }
})