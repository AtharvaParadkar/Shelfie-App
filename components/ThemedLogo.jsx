import { useColorScheme, Image } from 'react-native'
import React from 'react'

import darkLogo from '../assets/image/logo_dark.png'
import lightLogo from '../assets/image/logo_light.png'

const ThemedLogo = (...props) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? darkLogo : lightLogo

    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo