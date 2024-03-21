/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import Accordion, { AccordionProps } from 'react-native-collapsible/Accordion';

type Props<T extends object> = AccordionProps<T> & {

};

export const StyledAccordion = <T extends object,>(props: Props<T>) => {
    const renderHeader_fnct = <T extends object,>(section: Props<T>) => {
        <View style={{ alignSelf: 'center' }}>
            <Text >.</Text>
        </View >
    };
    const renderContent_fnct = <T extends object,>(section: Props<T>) => {
        return (
            <View style={{}}>
                <Text>content</Text>
            </View>
        );
    };

    const updateSections_fnct = (activeSections: Props.section) => {
        this.setState({ activeSections });
    };


    return (
        <>
            <Accordion {...props}
                sections={props.sections}
                onChange={props.onChange}
                activeSections={props.activeSections}
                renderContent={renderContent_fnct}
                renderHeader={renderHeader_fnct}
            ></Accordion >
        </>
    );
};
