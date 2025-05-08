
// Function to show dialogue with NPC
function talkToNPC (npc: Sprite, text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
// Dialogue triggers when player overlaps NPC
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player3, npc) {
    if (npc == npc1) {
        talkToNPC(npc1, "You woke up here too? I lost my memories last week.")
    } else if (npc == npc2) {
        talkToNPC(npc2, "I found a note near the river. Something about 'Project Echo'.")
    } else if (npc == npc3) {
        talkToNPC(npc3, "Some people say there's a lab beyond the forest...")
    } else if (npc == npc4) {
        talkToNPC(npc4, "\"You're not the first. The lab changed everything.\"")
    } else if (npc == npc5) {
        talkToNPC(npc5, "\"You should choose: go to the lab or forget everything.\"")
    } else if (npc == npc6) {
        talkToNPC(npc6, "\"They erased your past... but not your soul.\"")
    } else if (npc == npc7) {
        talkToNPC(npc7, "\"The experiment went wrong. You're the only survivor.\"")
    } else if (npc == npc8) {
        talkToNPC(npc8, "\"You were the lead scientist. You wiped your own memory.\"")
    }
})
let npc8: Sprite = null
let npc7: Sprite = null
let npc6: Sprite = null
let npc5: Sprite = null
let npc4: Sprite = null
let npc3: Sprite = null
let npc2: Sprite = null
let npc1: Sprite = null
let labEntered = false

game.showLongText("Lost Memories By Pijus, Aahad and Gustavs | AI Dialogues by ChatGPT and Character Art from MakeCode Arcade", DialogLayout.Center)
namespace myTiles {
    // Forest ground
    //% blockIdentity=images._tile
    export const tileForest = img`
        . . . . . . . . . . . . . . . .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 . . 2 . 2 . . 2 . 2 . . 2 .
        . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `;
}
scene.setBackgroundColor(9)
// Create forest tilemap
tiles.setTilemap(tiles.createTilemap(
                            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
                            img`
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                            `,
                            [myTiles.tileForest],
                            TileScale.Sixteen
                        ))
// Create player
let player2 = sprites.create(img`
    . . . . . f f f f . . . . . . 
    . . . f f e e e e f f . . . . 
    . . f f e e e e e e f f . . . 
    . f f f f f f e e e e f . . . 
    . f f f f f f e e e e f . . . 
    . f f e e e e e e e e f . . . 
    . . f e e f f f f e e f . . . 
    . . f f f e e e e f f f . . . 
    . f f e f b f 4 f b f e f . . 
    . f e e 4 1 f d f 1 4 e e f . 
    . . f e e d d d d d e e f . . 
    . . . f e e 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 f 4 e . . . 
    . . 4 d f 2 2 2 2 f d 4 . . . 
    . . 4 4 f 4 5 5 4 f 4 4 . . . 
    . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2)
scene.cameraFollowSprite(player2)
tiles.placeOnRandomTile(player2, assets.tile`transparency16`)
// Create NPCs in the Forest
npc1 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc1, tiles.getTileLocation(5, 5))
npc2 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f 3 3 5 3 3 5 3 d f f . . 
    . . . f d f 3 5 5 3 f f d f . . 
    . . . f d f 3 3 3 3 3 f f . . . 
    . . . f f 3 5 3 3 5 3 3 f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . . . . f f . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc2, tiles.getTileLocation(17, 6))
npc3 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc3, tiles.getTileLocation(3, 10))
// Create the Town tilemap
let townMap = tilemap`level1`
npc4 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc4, tiles.getTileLocation(8, 5))
npc5 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc5, tiles.getTileLocation(1, 3))
npc6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc6, tiles.getTileLocation(15, 9))
// Create Lab NPCs
npc7 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc7, tiles.getTileLocation(5, 14))
npc8 = sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    ........ccccfcdbbcc........fff..
    .............fffff..............
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc8, tiles.getTileLocation(7, 8))
let npc9 = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(npc9, tiles.getTileLocation(9, 9))


 // Change to Lab when A is pressed near final town NPC


 controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
 
//   if (labEntered == false && tiles.tileAtLocationIsWall(tiles.locationOfSprite(npc6))) {

//   labEntered = true
 
//   tiles.setCurrentTilemap(labMap)

//   tiles.placeOnTile(player, tiles.getTileLocation(3, 3))

//   game.splash("You enter the lab. Memories flood back...")

 })