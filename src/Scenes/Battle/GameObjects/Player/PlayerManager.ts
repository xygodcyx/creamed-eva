import { Component } from '@eva/eva.js'
import { Render } from '@eva/plugin-renderer-render'
import { SpriteAnimation } from '@eva/plugin-renderer-sprite-animation'

export default class PlayerManager extends Component {
  start(): void {

  }

  onDestroy(): void {

  }

  init(_params?: unknown | undefined): void {
    this.render()
  }

  render() {
    this.gameObject.addComponent(
      new Render({
        zIndex: 999,
      }),
    )

    const frame = this.gameObject.addComponent(
      new SpriteAnimation({
        resource: 'player-idle-top',
        speed: 100,
      }),
    )

    frame.play()
  }
}
