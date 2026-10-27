import { GameObject, Scene } from '@eva/eva.js'
import { Render } from '@eva/plugin-renderer-render'
import { GAME_HEIGHT, GAME_WIDTH } from 'src'
import BattleManager from './BattleManager'
import BackgourndColor from './GameObjects/BackgroundColor'
import Controller from './GameObjects/Controller'
import Footer from './GameObjects/Footer'

export default function BattleScene() {
  const scene = new Scene('battel', {
    size: {
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
    },
  })

  const bg = BackgourndColor()
  const footer = Footer()
  const controller = Controller()

  scene.addChild(bg)
  scene.addChild(footer)
  scene.addChild(controller)

  const stage = new GameObject('stage', {
    anchor: {
      x: 0.5,
      y: 0.5,
    },
    origin: {
      x: 0.5,
      y: 1,
    },
  })

  stage.addComponent(
    new Render({
      sortableChildren: true,
    }),
  )

  const battleManager = stage.addComponent<BattleManager>(BattleManager)
  battleManager.init()

  scene.addChild(stage)

  return scene
}
