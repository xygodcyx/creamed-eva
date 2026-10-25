import { GameObject } from '@eva/eva.js'
import { Sprite } from '@eva/plugin-renderer-sprite'

export const TILE_WIDTH = 35
export const TILE_HEIGHT = 35

export function Tile(src: number, i: number, j: number) {
  const tile = new GameObject(`tile ${i} ${j}`, {
    size: {
      width: TILE_WIDTH,
      height: TILE_HEIGHT,
    },

    position: {
      x: i * TILE_WIDTH,
      y: j * TILE_HEIGHT,
    },

    anchor: {
      x: 0.5,
      y: 1,
    },

    origin: {
      x: 0.5,
      y: 1,
    },
  })

  tile.addComponent(new Sprite({
    resource: 'tile',
    spriteName: `bg (${src}).png`,
  }))

  return tile
}
