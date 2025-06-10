import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "@/app/hooks/useCachedResources";
import Navigation from "./app/navigation";
import theme from "./constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </BottomSheetModalProvider>
        <StatusBar style="dark" />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
