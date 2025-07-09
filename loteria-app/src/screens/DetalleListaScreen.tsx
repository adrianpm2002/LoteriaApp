import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type DetalleListaScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'DetalleLista'>;
  route: RouteProp<RootStackParamList, 'DetalleLista'>;
};

const DetalleListaScreen: React.FC<DetalleListaScreenProps> = ({ route }) => {
  const { listaId } = route.params;

  // Aquí se puede agregar la lógica para obtener los detalles de la lista de lotería usando listaId

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Lista de Lotería</Text>
      <Text>ID de la lista: {listaId}</Text>
      {/* Aquí se pueden mostrar más detalles de la lista */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetalleListaScreen;