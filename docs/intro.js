import readme from '../README.md'

// NOTE: this is a workaround for rsg dependency
const Intro = () => null

Intro.styleguide = {
  index: 1,
  title: 'Introduction',
  category: 'Showcase',
  description: readme,
}

export default Intro
