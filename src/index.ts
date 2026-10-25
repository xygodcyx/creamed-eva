import { Game, resource } from '@eva/eva.js'

import { RendererSystem } from '@eva/plugin-renderer'
import { EventSystem } from '@eva/plugin-renderer-event'
import { GraphicsSystem } from '@eva/plugin-renderer-graphics'
import { ImgSystem } from '@eva/plugin-renderer-img'
import { RenderSystem } from '@eva/plugin-renderer-render'
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation'
import { TextSystem } from '@eva/plugin-renderer-text'
import { TransitionSystem } from '@eva/plugin-transition'
import resources from './resources'
import BattleScene from './Scenes/Battle'

resource.addResource(resources)

export const GAME_WIDTH = window.innerWidth
export const GAME_HEIGHT = window.innerHeight

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas')!,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      antialias: true,
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
  ],
})

game.loadScene({
  scene: BattleScene(),
})
