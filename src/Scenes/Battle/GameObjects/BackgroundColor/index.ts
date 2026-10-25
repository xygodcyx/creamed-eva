import { GameObject } from '@eva/eva.js'
import { Graphics } from '@eva/plugin-renderer-graphics'
import { GAME_HEIGHT, GAME_WIDTH } from 'src'

export default function BackgourndColor() {
  const background = new GameObject('bg', {})
  const graphics = background.addComponent(new Graphics())
  graphics.graphics.beginFill(0x140A27, 1)
  graphics.graphics.drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
  graphics.graphics.endFill()
  return background
}
