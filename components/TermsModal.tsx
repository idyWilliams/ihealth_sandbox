import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Box, Image, Text } from "@/components/Restyle";
import Icon from "@/assets/icons/Icon";
import { ScrollView } from "react-native";

type TermsModalProps = {
  visible: boolean;
  onClose: () => void;
  termsText: string;
};

const TermsModal = ({ visible, onClose, termsText }: TermsModalProps) => {
  return (
  

    <Modal visible={visible} animationType="slide" transparent>
      <Box
        flex={1}
        backgroundColor="primary"
        justifyContent="center"
        alignItems="center"
        px="md"
      >
        <Box
          bg="white"
          borderRadius={14}
          width="100%"
          maxHeight="85%"
          p="lg"
          shadowOpacity={0.15}
        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mb="md"
          >
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              gap="sm"
            >
              <Image
                source={require("@/assets/images/adaptive-icon.png")}
                width={32}
                height={32}
                borderRadius={8}
                resizeMode="contain"
              />
              <Text variant="header" color="primary">
                Terms of Use
              </Text>
            </Box>
            <TouchableOpacity onPress={() => onClose()}>
              <Icon name="close" size={24} color="primary" />
            </TouchableOpacity>
          </Box>
          <ScrollView>
            <Text variant="medium12" color="black">
              {termsText}
            </Text>
          </ScrollView>
        </Box>
      </Box>
    </Modal>
  );
};

export default TermsModal;
