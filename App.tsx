import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import Navigation from './app/navigation/Navigation';
import { AuthProvider } from './app/providers/authProvider';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';
// import {TailwindProvider} from 'tailwind-rn';
// import utilities from './tailwind.json';


export default function App() {
  const tw = useTailwind()
  return (
    <AuthProvider >
      <Navigation></Navigation>
    </AuthProvider>
  );
}
LogBox.ignoreAllLogs()