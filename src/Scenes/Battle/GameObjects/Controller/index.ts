import { GameObject } from '@eva/eva.js'

export default function Controller() {
  const controller = new GameObject('controller', {
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

  return controller
}
