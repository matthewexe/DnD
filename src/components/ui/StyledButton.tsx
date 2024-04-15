import React from 'react';
import {
  StyleSheet,
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {customTheme2} from '../../constants/theme';
import {StyledText} from './texts/StyledText';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type Props = PressableProps & {
  text: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
};

export const StyledButton = ({
  text,
  icon,
  iconPosition = 'right',
  iconSize = 16,
  ...props
}: Props) => {
  return (
    <Pressable
      {...props}
      style={[styles.button, props.style as StyleProp<ViewStyle>]}>
      {icon && iconPosition === 'left' && (
        <FontAwesome6
          name={icon}
          size={iconSize}
          color={customTheme2.colors.text}
          style={[{marginRight: text !== '' ? 10 : 0}]}
          solid
        />
      )}
      {text !== '' && <StyledText>{text}</StyledText>}
      {icon && iconPosition === 'right' && (
        <FontAwesome6
          name={icon}
          size={iconSize}
          color={customTheme2.colors.text}
          style={[{marginLeft: text !== '' ? 10 : 0}]}
          solid
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: customTheme2.colors.primary,
    // width: 120,
    // height: 41,
    padding: 15,
    paddingVertical: 12,
  },
});
