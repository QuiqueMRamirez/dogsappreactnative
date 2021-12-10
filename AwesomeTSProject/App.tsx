/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

interface DogData {
  name: string;
  value: string[];
}

const App = () => {
  const [dataDog, setDataDog] = useState<Array<DogData>>([]);

  const fetchData = async () => {
    const resp = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await resp.json();
    let auxArray: DogData[] = [];
    for (const [key, value] of Object.entries(data.message)) {
      const newValue: any = value;
      auxArray.push({
        name: key,
        value: newValue,
      });
    }
    setDataDog(auxArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {dataDog && dataDog.length > 0 ? (
          dataDog.map(element => (
            <View key={element.name}>
              <Text style={styles.item}>{element.name}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.item}>Loading data...</Text>
        )}
      </ScrollView>
    </View>
  );
};
export default App;
