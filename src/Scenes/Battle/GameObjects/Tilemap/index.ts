import { GameObject } from '@eva/eva.js'
import levels from 'src/Levels'
import { Tile, TILE_HEIGHT, TILE_WIDTH } from './Tile'

export const BUTTON_WIDTH = 70
export const BUTTON_HEIGHT = 60
export const BUTTON_GAP = 8

export default function Tilemap() {
  const tilemap = new GameObject('tilemap', {

    position: {
      x: 0,
      y: 0,
    },

    anchor: {
      x: 0.5,
      y: 0.5,
    },

  })

  const level1 = levels[`level${1}`]!

  tilemap.transform.position = {
    x: -level1.mapInfo.length * TILE_WIDTH / 2 + TILE_WIDTH / 2,
    y: -level1.mapInfo[0]!.length * TILE_HEIGHT / 2 + TILE_HEIGHT * 2,
  }

  for (let i = 0; i < level1.mapInfo.length; i++) {
    const column = level1.mapInfo[i]!
    for (let j = 0; j < column.length; j++) {
      const tile = column[j]!
      if (tile.src === null || tile.type === null) {
        continue
      }
      const obj = Tile(tile.src, i, j)
      tilemap.addChild(obj)
    }
  }

  return tilemap
}
