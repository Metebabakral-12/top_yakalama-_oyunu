input.onButtonPressed(Button.A, function () {
    Oyuncu.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Oyuncu.move(1)
})
let Oyuncu: game.LedSprite = null
Oyuncu = game.createSprite(2, 4)
let Top = game.createSprite(randint(0, 4), 0)
game.setLife(2)
game.setScore(0)
basic.forever(function () {
    Top.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (Oyuncu.isTouching(Top)) {
        game.addScore(1)
        Top.set(LedSpriteProperty.Y, 0)
        Top.set(LedSpriteProperty.X, randint(0, 4))
    } else if (Top.get(LedSpriteProperty.Y) == 4) {
        game.removeLife(1)
        Top.set(LedSpriteProperty.Y, 0)
        Top.set(LedSpriteProperty.X, randint(0, 4))
    }
})
