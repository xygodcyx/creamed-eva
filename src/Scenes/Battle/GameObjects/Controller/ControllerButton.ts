import { GameObject } from '@eva/eva.js'
import { Event } from '@eva/plugin-renderer-event'
import { Sprite } from '@eva/plugin-renderer-sprite'
import { Transition } from '@eva/plugin-transition'
import { CONTROLLER_TYPE_ENUM, EVENT_TYPE_ENUM } from 'src/Enums'
import EventManager from 'src/Runtime/EventManager'
import { ScaleTransition } from 'src/Utils'

export const BUTTON_WIDTH = 70
export const BUTTON_HEIGHT = 60
export const BUTTON_GAP = 8
function getPosition(index: number): { x: number, y: number } {
  const xAxis = Math.floor((index - 1) / 2)
  const yAxis = (index - 1) % 2

  return {
    x: (xAxis - 1) * BUTTON_WIDTH,
    y: yAxis * (BUTTON_HEIGHT + BUTTON_GAP),
  }
}

export default function ControllerButton(index: number, direction: CONTROLLER_TYPE_ENUM) {
  const button = new GameObject('button', {
    size: {
      width: BUTTON_WIDTH,
      height: BUTTON_HEIGHT,
    },

    position: getPosition(index),

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
    resource: 'ctrl',
    spriteName: `ctrl (${index}).png`,
  })

  const animation = button.addComponent(new Transition())

  animation.group = ScaleTransition(button)

  const event = button.addComponent(new Event())

  event.on('touchstart', () => {
    animation.play('small')
  })

  event.on('touchend', () => {
    animation.play('restore')
    if (direction === CONTROLLER_TYPE_ENUM.RIGHT) {
      EventManager.Instance.emit(EVENT_TYPE_ENUM.NEXT_LEVEL)
    }
    EventManager.Instance.emit(EVENT_TYPE_ENUM.MOVE, direction)
  })

  event.on('touchendoutside', () => {
    animation.play('restore')
  })

  button.addComponent(sprite)

  return button
}
