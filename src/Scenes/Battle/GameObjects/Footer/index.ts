import { GameObject } from '@eva/eva.js'
import { Text } from '@eva/plugin-renderer-text'

export default function Footer() {
  const footer = new GameObject('footer', {
    position: {
      x: 0,
      y: -20,
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

  footer.addComponent(new Text(
    {
      text: 'This is a good game.',
      style: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        fontSize: 14,
        fill: '#ccc',
      },
    },
  ))
  return footer
}
