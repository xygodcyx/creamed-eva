import { GameObject } from '@eva/eva.js'
import { Sprite } from '@eva/plugin-renderer-sprite'

export default function ControllerButton() {
  const button = new GameObject('button', {
    position: {
      x: 0,
      y: -140,
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

  const sprite = new Sprite({
    resource: 'spriteName',
    spriteName: 'syobol_1',
  })

  return button
}
