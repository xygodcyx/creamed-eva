import type { argv0 } from 'node:process'
import type { ITile } from 'src/Levels'
import Singleton from 'src/Base/Singleton'

export default class DataManager extends Singleton {
  mapInfo: Array<Array<ITile>> = []
  mapColumnCount: number = 0
  mapRowCount: number = 0
  levelIndex: number = 1

  public static get Instance() {
    return this.GetInstance<DataManager>()
  }

  reset() {
    this.mapInfo = []
    this.mapColumnCount = 0
    this.mapRowCount = 0
  }
}
