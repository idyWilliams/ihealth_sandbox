import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import Box from "@/components/Restyle/Box";
import Text from "@/components/Restyle/Text";
import { Image, Pressable } from "./Restyle";
import Icon from "@/assets/icons/Icon";

const BottomSheetDropdown = ({
  data,
  label,
  placeHolderText,
  selectedItem,
  setSelectedItem,
  firstNeed = false,
}: {
  data: any[];
  label: string;
  placeHolderText?: string;
  selectedItem: any;
  setSelectedItem: any;
  firstNeed?: boolean;
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [placeHolder, setPlaceholder] = useState<any>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const placeHolderTitle = placeHolderText || "Select an item";

  // Calculate dynamic snap points based on data length
  const snapPoints = useMemo(() => {
    const itemHeight = 60; // Approximate height per item
    const headerHeight = 80; // Header space
    const maxHeight = 400; // Maximum height
    const calculatedHeight = Math.min(
      headerHeight + data.length * itemHeight,
      maxHeight
    );
    const percentage = Math.min((calculatedHeight / 800) * 100, 50); // Assuming screen height ~800
    return [Math.max(percentage, 25) + "%"];
  }, [data.length]);

  useEffect(() => {
    if (firstNeed && data.length > 0) {
      const firstItem = data[0];
      setSelectedItem(firstItem);
      setPlaceholder(firstItem);
    }
  }, [firstNeed, data]);

  const handlePresentModalPress = useCallback(() => {
    setFilteredData(data);
    bottomSheetModalRef.current?.present();
  }, [data]);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const handleSelectItem = useCallback(
    (item: any) => {
      setSelectedItem(item);
      setPlaceholder(item);
      bottomSheetModalRef.current?.dismiss();
    },
    [setSelectedItem]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      onPress={() => handleSelectItem(item)}
      style={styles.itemContainer}
    >
      <Box flexDirection="row" alignItems="center" flex={1}>
        <Text variant="medium14" flex={1}>
          {item?.name || "Select option"}
        </Text>
      </Box>
    </Pressable>
  );

  return (
    <>
      <Box>
        <Text variant="body" marginBottom="xs">
          {label}
        </Text>
        <Pressable
          onPress={handlePresentModalPress}
          paddingHorizontal="sm"
          justifyContent="space-between"
          borderWidth={0.5}
          borderColor="textTint"
          borderRadius={8}
          alignItems="center"
          backgroundColor="white"
          flexDirection="row"
          height={55}
        >
          <Box alignItems="center" flexDirection="row">
            {placeHolder?.flag && (
              <Image
                source={placeHolder?.flag}
                height={15}
                width={20}
                style={{ marginRight: 20 }}
              />
            )}
            <Text variant="medium12">
              {placeHolder?.key ? placeHolder?.key : placeHolderTitle}
            </Text>
          </Box>
          <Icon
            name="arrowLeft"
            style={{ transform: [{ rotate: "270deg" }] }}
            size={24}
          />
        </Pressable>
      </Box>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        enableContentPanningGesture={false}
        enablePanDownToClose
        handleIndicatorStyle={styles.handleIndicator}
        backgroundStyle={styles.bottomSheetBackground}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Box paddingHorizontal="md" paddingVertical="sm" marginBottom="xl">
            <Text variant="medium14" textAlign="center" marginBottom="md">
              {label}
            </Text>

            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item, index) =>
                item?.id?.toString() ||
                item?.key?.toString() ||
                index.toString()
              }
              scrollEnabled
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              //   style={{ maxHeight: 300 }}
            />
          </Box>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: "100%",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    minHeight: 56,
    justifyContent: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 16,
  },
  handleIndicator: {
    backgroundColor: "#C4C4C4",
    width: 40,
  },
  bottomSheetBackground: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default BottomSheetDropdown;
