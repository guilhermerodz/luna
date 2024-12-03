import { type ThemeConfig, extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

// 3. extend the theme
const theme = extendTheme({ config })

export { theme }
