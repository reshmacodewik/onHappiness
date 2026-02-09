import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style/Input.styles';


type IconType = 'Ionicons' | 'MaterialIcons' | 'Feather';

type Props = {
  placeholder: string;

  // ✅ ADD THESE
  value: string;
  onChangeText: (text: string) => void;

  secureTextEntry?: boolean;

  iconName?: string;
  iconType?: IconType;

  rightIconName?: string;
  onRightIconPress?: () => void;
};

const renderIcon = (
  name: string,
  type: IconType,
  onPress?: () => void,
) => {
  const size = 20;
  const color = '#9A9A9A';

  const Icon =
    type === 'MaterialIcons'
      ? MaterialIcons
      : type === 'Feather'
      ? Feather
      : Ionicons;

  const icon = <Icon name={name} size={size} color={color} />;

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
  ) : (
    icon
  );
};

const InputField: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  iconName,
  iconType = 'Ionicons',
  rightIconName,
  onRightIconPress,
}) => {
  return (
    <View style={styles.container}>
      {iconName && renderIcon(iconName, iconType)}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#B5B5B5"
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />

      {rightIconName &&
        renderIcon(rightIconName, 'Ionicons', onRightIconPress)}
    </View>
  );
};

export default InputField;
