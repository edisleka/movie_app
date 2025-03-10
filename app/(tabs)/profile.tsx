import { icons } from '@/constants/icons'
import { View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary flex-1 '>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='px-7 mb-100'
      >
        <View className='flex flex-row items-start justify-between mt-5'>
          <Text className='text-white text-xl font-bold'>Profile</Text>
          <FontAwesome5 name='bell' size={19} color='white' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
