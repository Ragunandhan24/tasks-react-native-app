import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Colors from "../constants/Colors";

const InputModal = (props) => {
  const [value, setValue] = useState("");
  const { closeModal, saveValue, openModal, confirmText, cancelText, heading } =
    props;

  return (
    <Modal visible={openModal} animationType="slide" transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          closeModal();
        }}
      >
        <View style={styles.screen}>
          <View style={styles.modelView}>
            <Text style={styles.text}>{heading}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => {
                setValue(value);
              }}
              value={value}
            />
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={() => saveValue(value)}>
                <View style={[styles.buttonContainer, styles.saveButton]}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "black",
                      fontFamily: "montserrat-bold",
                    }}
                  >
                    {confirmText}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <View style={[styles.buttonContainer, styles.cancelButton]}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "black",
                      fontFamily: "montserrat-bold",
                    }}
                  >
                    {cancelText}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
  textInput: {
    borderColor: Colors.midnightBlue,
    borderWidth: 2,
    padding: 10,
    width: "80%",
    borderRadius: 20,
    color: Colors.heading,
    margin: 5,
    backgroundColor: Colors.appBackgroundColor,
    elevation: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    width: 100,
  },

  saveButton: {
    backgroundColor: Colors.seaGreen,
  },
  cancelButton: {
    backgroundColor: Colors.deepPink,
  },

  text: {
    color: "white",
    fontSize: 15,
    alignSelf: "flex-start",
    paddingLeft: 45,
    paddingVertical: 10,
    fontFamily: "montserrat-bold",
  },

  buttonView: {
    flexDirection: "row",
  },

  modelView: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "80%",
    backgroundColor: Colors.appBackgroundColor,
    borderRadius: 20,
    elevation: 4,
  },
});

export default InputModal;
