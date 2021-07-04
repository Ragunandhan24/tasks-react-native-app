import React from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/Colors";

const InfoModal = (props) => {
  const { text, buttonText, closeModal } = props;
  return (
    <Modal visible={props.openModal} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.screen}>
          <View style={styles.modalView}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={closeModal} activeOpacity={0.7}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{buttonText}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#00000099",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    height: 150,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: Colors.appBackgroundColor,
    elevation: 5,
  },
  buttonContainer: {
    width: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    elevation: 10,
    backgroundColor: Colors.seaGreen,
  },
  text: {
    color: "white",
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "roboto-bold",
  },

  buttonText: {
    fontSize: 15,
    color: "black",
    fontFamily: "montserrat-bold",
  },
});

export default InfoModal;
