import React from "react";
import { View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Box, Image, Text } from "@/components/Restyle";

type TrustedBrand = {
  name: string;
  logo: string;
};

type Props = {
  brands: TrustedBrand[];
};

const { width: viewportWidth } = Dimensions.get("window");

const TrustedByCarousel = ({ brands }: Props) => {
  const renderItem = ({ item }: { item: TrustedBrand }) => {
    return (
      <Box alignItems="center" justifyContent="center" padding="sm">
        <Image
          source={{ uri: item.logo }}
          width={80}
          height={80}
          borderRadius={14}
          resizeMode="contain"
          mb="xs"
        />
        <Text variant="medium12" color="textTint" textAlign="center">
          {item.name}
        </Text>
      </Box>
    );
  };

  return (
    <Box mb="lg">
      <Text variant="medium14" color="primary" fontWeight="700" mb="sm">
        Trusted By
      </Text>
      {/* <Carousel
        data={brands}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={150}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        autoplay
        autoplayInterval={3000}
        loop
        enableSnap
      />  */}
    </Box>
  );
};

export default TrustedByCarousel;
