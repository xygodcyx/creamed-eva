import { Scene } from '@eva/eva.js'
import { GAME_HEIGHT, GAME_WIDTH } from 'src'
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

  return scene
}
