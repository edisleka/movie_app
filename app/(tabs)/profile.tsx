import { icons } from '@/constants/icons'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign'
import ProfileSettingsItem from '@/components/ProfileSettingsItem'
import { settings } from '@/constants/data'

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary flex-1 '>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='px-7 mb-100'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='flex flex-row items-start justify-between mt-5'>
          <Text className='text-white text-xl font-bold'>Profile</Text>
          <FontAwesome5 name='bell' size={20} color='white' />
        </View>

        <View className='mt-5 flex flex-row justify-center'>
          <View className='flex flex-col relative items-center mt-5'>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/88153881?v=4',
              }}
              className='size-44 rounded-full relative'
            />
            <TouchableOpacity className='absolute bottom-12 right-3'>
              <Feather name='edit' size={20} color='red' />
            </TouchableOpacity>
            <Text className='text-accent text-2xl mt-2'>Edis Leka</Text>
          </View>
        </View>

        <View className='flex flex-col mt-10'>
          <ProfileSettingsItem icon={icons.calendar} title='Saved Movies' />
          <ProfileSettingsItem icon={icons.wallet} title='Subscriptions' />
        </View>

        <View className='flex flex-col mt-5 border-t pt-5 border-light-200'>
          {settings.slice(2).map((setting, index) => (
            <ProfileSettingsItem key={index} {...setting} />
          ))}
        </View>

        <View className='flex flex-col mt-5 border-t pt-5 border-light-200'>
          <ProfileSettingsItem icon={icons.logout} title='Logout' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
