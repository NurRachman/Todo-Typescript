import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import {Todo} from './data';

const TodoItem: React.FC<Todo> = props => {
  const [checked, setChecked] = useState<boolean>(props.checked);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  function onChecked() {
    setChecked(!checked);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onChecked}>
        <IonicIcons
          name={checked ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color="blue"
          style={styles.checkmark}
        />
      </TouchableOpacity>
      <Text>{props.label}</Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginTop: 8,
  },
  checkmark: {
    marginRight: 16,
  },
});
