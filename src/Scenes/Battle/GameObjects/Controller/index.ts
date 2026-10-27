import { GameObject } from '@eva/eva.js'
import { CONTROLLER_TYPE_ENUM } from 'src/Enums'
import ControllerButton from './ControllerButton'

const CONTOLLER_EMIT_VALUES = [
  {
    value: CONTROLLER_TYPE_ENUM.TURN_LEFT,
  },
  {
    value: CONTROLLER_TYPE_ENUM.LEFT,
  },
  {
    value: CONTROLLER_TYPE_ENUM.TOP,
  },
  {
    value: CONTROLLER_TYPE_ENUM.BOTTOM,
  },
  {
    value: CONTROLLER_TYPE_ENUM.TURN_RIGHT,
  },
  {
    value: CONTROLLER_TYPE_ENUM.RIGHT,
  },
]
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

  CONTOLLER_EMIT_VALUES.forEach(({ value }, index) => controller.addChild(ControllerButton(index + 1, value)))

  return controller
}
