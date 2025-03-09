import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  vote_count,
}: Movie) => {
  // console.log(poster_path)

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className='w-[30%]'>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png',
          }}
          className='w-full h-52 rounded-lg'
          resizeMode='cover'
        />
        <Text className='text-white text-sm font-bold mt-2' numberOfLines={1}>
          {title}
        </Text>
        <View className='flex-row items-center justify-between mt-0.5'>
          <View className='flex-row items-center justify-start gap-0.5'>
            <Image source={icons.star} className='size-4' />
            <Text className='text-xs text-white font-bold uppercase'>
              {Math.round(vote_average / 2)}
            </Text>
          </View>
          <View className='flex-row items-center justify-between '>
            <MaterialCommunityIcons
              name='vote-outline'
              color='#a8b5db'
              className='size-4'
            />
            <Text className='text-xs text-white font-bold uppercase'>
              {vote_count}
            </Text>
          </View>
        </View>
        <View className='flex-row items-center justify-between mt-1'>
          <Text className='text-xs text-light-300 font-medium '>
            {release_date?.split('-')[0]}
          </Text>
          <Text className='text-xs text-light-300 font-medium uppercase'>
            Movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}
export default MovieCard
