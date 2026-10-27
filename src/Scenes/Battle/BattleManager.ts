import type { GameObject } from '@eva/eva.js'
import { Component } from '@eva/eva.js'
import { EVENT_TYPE_ENUM } from 'src/Enums'
import levels from 'src/Levels'
import DataManager from 'src/Runtime/DataManager'
import EventManager from 'src/Runtime/EventManager'
import Tilemap from './GameObjects/Tilemap'
import { TILE_HEIGHT, TILE_WIDTH } from './GameObjects/Tilemap/Tile'

export default class BattleManager extends Component {
  tilemap: GameObject | null = null

  start(): void {
    EventManager.Instance.on(EVENT_TYPE_ENUM.NEXT_LEVEL, this.nextLevel, this)
  }

  onDestroy(): void {
    EventManager.Instance.off(EVENT_TYPE_ENUM.NEXT_LEVEL, this.nextLevel)
  }

  init() {
    this.generateTilemap()
  }

  generateTilemap() {
    DataManager.Instance.mapInfo = levels[`level${DataManager.Instance.levelIndex}`]!.mapInfo

    if (!DataManager.Instance.mapInfo) {
      return
    }

    DataManager.Instance.mapColumnCount = DataManager.Instance.mapInfo!.length
    DataManager.Instance.mapRowCount = DataManager.Instance.mapInfo[0]!.length

    this.tilemap = Tilemap()
    this.gameObject.addChild(this.tilemap)
    this.adaptTilemap()
  }

  adaptTilemap() {
    if (!this.tilemap) {
      return
    }

    this.tilemap.transform.position = {
      x: -DataManager.Instance.mapColumnCount * TILE_WIDTH / 2 + TILE_WIDTH / 2,
      y: -DataManager.Instance.mapRowCount * TILE_HEIGHT / 2 + TILE_HEIGHT * 2,
    }
  }

  nextLevel() {
    DataManager.Instance.levelIndex++
    this.cleanLevel()
    this.generateTilemap()
  }

  cleanLevel() {
    Array.from(this.gameObject.transform.children).forEach(({ gameObject }) => {
      gameObject.destroy()
    })
    DataManager.Instance.reset()
  }
}
