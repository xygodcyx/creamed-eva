import { GameObject } from '@eva/eva.js'
import { TILE_HEIGHT, TILE_WIDTH } from '../Tilemap/Tile'
import PlayerManager from './PlayerManager'

export default function Player() {
  const player = new GameObject(`player`, {
    size: {
      width: TILE_WIDTH * 4,
      height: TILE_HEIGHT * 4,
    },

    position: {
      x: 0,
      y: 0,
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

  player.addComponent(PlayerManager)

  return player
}
