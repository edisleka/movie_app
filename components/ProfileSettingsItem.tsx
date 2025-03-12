import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ProfileSettingsItemProps } from '@/types/profileSettingsItemProps'
import { icons } from '@/constants/icons'

const ProfileSettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: ProfileSettingsItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='flex flex-row items-center justify-between py-3'
    >
      <View className='flex flex-row items-center gap-3'>
        <Image source={icon} className='size-6' tintColor='#AB8BFF' />
        <Text className={`text-lg text-white ${textStyle}`}>{title}</Text>
      </View>
      {showArrow && (
        <Image source={icons.rightArrow} className='size-5' tintColor='white' />
      )}
    </TouchableOpacity>
  )
}
export default ProfileSettingsItem
