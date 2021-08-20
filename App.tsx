import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import {Todo, Todos} from './data';
import TodoItem from './todoItem';

const App = () => {
  const [data, setData] = useState<Todo[]>(Todos);
  const [label, setLabel] = useState<string>('');

  function onSubmitEditing() {
    const newTodo: Todo = {
      checked: false,
      id: data.length,
      label: label,
    };
    const tempDataTodo = [...data];
    tempDataTodo.push(newTodo);
    setData(tempDataTodo);

    setLabel('');
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.textCreatedDate}>20 Augustus 2021</Text>
        <TextInput
          placeholder="Tambah Item disni"
          placeholderTextColor="grey"
          style={styles.input}
          value={label}
          onChangeText={setLabel}
          onSubmitEditing={onSubmitEditing}
        />
        <FlatList
          data={data}
          keyExtractor={(item: Todo, index: number) => index.toString()}
          renderItem={({item}) => {
            return (
              <TodoItem
                id={item.id}
                label={item.label}
                checked={item.checked}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  textCreatedDate: {
    borderRadius: 8,
    backgroundColor: 'grey',
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: 'white',
  },
  input: {
    color: 'black',
  },
});
