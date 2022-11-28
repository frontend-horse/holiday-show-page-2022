# Holiday Snowtacular Website

## CSS Styling

We have two systems for design tokens/custom properties in the project.

### Utopia: Font and spacing sizes

The first is Utopia, which can be found in `utopia.scss`. Use the `--step-x` custom properties for all font sizes. Use the `--size-*` custom properties for most sizing like margin, padding, etc.

Utopia is inherently responsive and does not require media queries to change the values.

### Open Props: Colors

The second is Open Props, which we're using for colors. Use the Open Props colors whenever you can.
