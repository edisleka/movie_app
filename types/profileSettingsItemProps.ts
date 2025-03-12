import { ImageSourcePropType } from 'react-native'

export interface ProfileSettingsItemProps {
  icon: ImageSourcePropType
  title: string
  onPress?: () => void
  textStyle?: string
  showArrow?: boolean
}
