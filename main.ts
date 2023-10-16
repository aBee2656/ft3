input.onButtonPressed(Button.A, function () {
    PROTAG.move(-1)
})
input.onButtonPressed(Button.B, function () {
    PROTAG.move(1)
})
let PROTAG: game.LedSprite = null
PROTAG = game.createSprite(2, 4)
let NPC = game.createSprite(randint(0, 4), 0)
let NPC_velocidad = 500
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(500)
    NPC.change(LedSpriteProperty.Y, 1)
    if (NPC.get(LedSpriteProperty.Y) == 4) {
        basic.pause(500)
        if (NPC.isTouching(PROTAG)) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # . # . #
                # # # # #
                . # # # .
                `)
        } else {
            NPC.delete()
            NPC = game.createSprite(randint(0, 4), 0)
            NPC_velocidad = 0 - 0
        }
    }
})
