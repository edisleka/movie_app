import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from '@/cache'
import { Stack, Slot } from 'expo-router'
import './global.css'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen
            name='(protected)/(tabs)'
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='(protected)/movies/[id]'
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='(auth)/signIn'
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='(auth)/signUp'
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  )
}
