import {customTheme2} from '../../constants/theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal, {ReactNativeModal} from 'react-native-modal';

export class StyledModal extends ReactNativeModal {
  render() {
    return (
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
        style={[styles.modalContainer]}>
        <View style={[styles.innerContainer, this.props.style]}>
          {this.props.children}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    height: '100%',
    backgroundColor: customTheme2.colors.background + '50',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  innerContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 20,
    borderRadius: 20,
    backgroundColor: customTheme2.colors.card,
  },
});
