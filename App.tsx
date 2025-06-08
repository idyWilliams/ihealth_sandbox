import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "@/app/hooks/useCachedResources";
import Navigation from "./app/navigation";
import theme from "./constants/Colors";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <Navigation />
        </BottomSheetModalProvider>
      </SafeAreaProvider>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
