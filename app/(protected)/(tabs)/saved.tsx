import { icons } from '@/constants/icons'
import { View, Text, Image } from 'react-native'

const Saved = () => {
  return (
    <View className='bg-primary flex-1 px-10'>
      <View className='flex flex-col flex-1 items-center justify-center gap-5'>
        <Image source={icons.save} className='size-10' tintColor='#fff' />
        <Text className='text-gray-500 text-base'>Save</Text>
      </View>
    </View>
  )
}
export default Saved
