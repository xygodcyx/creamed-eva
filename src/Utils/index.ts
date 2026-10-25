import type { GameObject } from '@eva/eva.js'

export function ScaleTransition(gameObject: GameObject) {
  return {
    small: [
      {
        name: 'scale.x',
        component: gameObject.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 0.9,
            tween: 'ease-in',
          },
        ],
      },
      {
        name: 'scale.y',
        component: gameObject.transform,
        values: [
          {
            time: 0,
            value: 1,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 0.9,
            tween: 'ease-in',
          },
        ],
      },
    ],

    restore: [
      {
        name: 'scale.x',
        component: gameObject.transform,
        values: [
          {
            time: 0,
            value: 0.9,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 1,
            tween: 'ease-in',
          },
        ],
      },
      {
        name: 'scale.y',
        component: gameObject.transform,
        values: [
          {
            time: 0,
            value: 0.9,
            tween: 'ease-out',
          },
          {
            time: 100,
            value: 1,
            tween: 'ease-in',
          },
        ],
      },
    ],
  }
}
