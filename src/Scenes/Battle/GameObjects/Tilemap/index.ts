import { GameObject } from '@eva/eva.js'
import DataManager from 'src/Runtime/DataManager'
import { Tile } from './Tile'

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

  for (let i = 0; i < DataManager.Instance.mapInfo.length; i++) {
    const column = DataManager.Instance.mapInfo[i]!
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
