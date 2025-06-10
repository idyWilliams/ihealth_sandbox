import {
  View,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";
import { Pressable, Text } from "./Restyle";

const DropdownModal = ({
  isOpen,
  setIsOpen,
  filteredData,
  handleSelectItem,
}) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.bottomSheet}>
              <View style={styles.sheetHandle} />
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
              >
                {filteredData?.map((item) => (
                  <Pressable
                    key={item.name}
                    onPress={() => handleSelectItem(item)}
                    flexDirection="row"
                    paddingHorizontal="sm"
                    alignItems="center"
                  >
                    <Text variant="body" padding="sm">
                      {item.name}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default DropdownModal;
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 20,
    maxHeight: 300,
  },
  sheetHandle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 10,
  },
});
