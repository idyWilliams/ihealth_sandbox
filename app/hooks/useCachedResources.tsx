import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...FontAwesome.font,
          "harmonia-bd": require("@/assets/fonts/HarmoniaSansProCyr-Bold.ttf"),
          "harmonia-rg": require("@/assets/fonts/HarmoniaSansProCyr-Regular.ttf"),
          "harmonia-sbd": require("@/assets/fonts/HarmoniaSansProCyr-SemiBd.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
