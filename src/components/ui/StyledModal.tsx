/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal, { ReactNativeModal } from 'react-native-modal';

export class StyledModal extends ReactNativeModal {

    render() {
        return (
            <View style={{ width: '70%', height: '80%', alignSelf: 'center', position: 'absolute', top: '50%' }}>
                <Modal
                    {...this.props}
                    animationInTiming={900}
                    animationIn={'slideInUp'}
                    animationOutTiming={300}
                    animationOut={'slideInUp'}

                    coverScreen={false} //per coprire l'intero schermo
                    isVisible={this.props.isVisible}
                    backdropColor='transparent'
                    backdropOpacity={100}

                    style={styles.centered}

                >
                    {this.props.children}
                </Modal>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    centered: {
        borderWidth: 1,
        borderRadius: 0,
        backgroundColor: '#ffffff',
        borderColor: 'white',

        flex: 1,
    },
});
