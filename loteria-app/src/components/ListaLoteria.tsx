import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface ListaLoteriaProps {
  loterias: { id: string; nombre: string }[];
}

const ListaLoteria: React.FC<ListaLoteriaProps> = ({ loterias }) => {
  const renderItem = ({ item }: { item: { id: string; nombre: string } }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.nombre}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={loterias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default ListaLoteria;