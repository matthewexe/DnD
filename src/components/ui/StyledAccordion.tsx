/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Accordion from 'react-native-collapsible/Accordion';
import { APIReference } from '../../types/responses';

type AccordionItemProps = PropsWithChildren<{
    title: string;
}>;

function AccordionItem({ children, title }: AccordionItemProps) {
    const [selected, setSelected] = useState(false);

    function openClose() {
        setSelected(!selected);
    }

    const content = <View>{children}</View>;

    return (<View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={openClose} style={{ flexDirection: 'row' }}>
            <Text>{title}</Text>
            <Icon name={selected ? "chevron-up" : "chevron-down"} size={20} color="#009000" />
        </TouchableOpacity>
        {selected && content}
    </View>)
}

type Props = {
    data: APIReference[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledAccordion = (props: Props) => {
    return (<SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
            <AccordionItem title={"titolo"}>
                <Text>Prima descrizione</Text>
            </AccordionItem>
            <AccordionItem title={"titolone"}>
                <Text>secOnda deskrizione</Text>
            </AccordionItem>
            <AccordionItem title={"titolino"}>
                <Text>terZa desckreezione</Text>
            </AccordionItem>
        </ScrollView>
    </SafeAreaView >);
}