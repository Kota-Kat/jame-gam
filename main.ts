tiles.setCurrentTilemap(tilemap`level2`)
let Tree = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f . . . . 
    . . . . . f f f 7 7 7 7 f . . . 
    . . . . f 7 7 7 7 7 7 7 7 f . . 
    . . . . f 7 7 7 7 7 7 7 7 7 f . 
    . . . . f 7 7 7 7 7 7 7 7 7 f . 
    . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
    . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
    . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
    . . . . f 7 7 7 7 7 7 7 7 7 f . 
    . . . . . f 7 7 7 7 7 7 7 7 f . 
    . . . . . . f 7 7 7 7 7 7 f . . 
    . . . . . . . f 7 7 7 f f . . . 
    . . . . . . . . f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
for (let index = 0; index < 5; index++) {
    tiles.placeOnTile(Tree, tiles.getTileLocation(randint(2, 13), randint(2, 13)))
    tiles.placeOnTile(Tree, tiles.getTileLocation(randint(2, 13), randint(2, 13)))
}
let _3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . f f . . . f . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . f f . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(_3, 100, 100)
scene.cameraFollowSprite(_3)
