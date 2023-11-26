import { TextProps } from './Text'

type HelperArgs = Omit<TextProps, 'children'>

const sizeMap = (mapArgs: HelperArgs) => ({
  [TextSize.HEADING_1]: <h1 color={mapArgs?.color}></h1>
})

const textTypeMapper = (args: Omit<TextProps, 'children'>) => {}
