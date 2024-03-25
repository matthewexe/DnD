/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal, {ReactNativeModal} from 'react-native-modal';

export class StyledModal extends ReactNativeModal {
  render() {
    return (
      <View
        style={{
          width: '70%',
          height: 270, //80%
          alignSelf: 'center',
          position: 'absolute',
          top: '60%', //61%

          flex: 1,
        }}>
        <Modal
          {...this.props}
          animationInTiming={480}
          animationIn={'slideInUp'}
          animationOutTiming={500}
          animationOut={'slideOutDown'}
          coverScreen={false} //per coprire l'intero schermo
          isVisible={this.props.isVisible}
          backdropColor="trasparent"
          backdropOpacity={5}
          style={styles.centered}>
          {this.props.children}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderColor: 'white',

    flex: 1,

    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.85,
    shadowRadius: 4,
    elevation: 26,
  },
});
