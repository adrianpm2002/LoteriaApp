import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListaLoteria from '../components/ListaLoteria';

const HomeScreen = () => {
    const navigation = useNavigation();

    const loterias = [
        { id: '1', nombre: 'Lotería Nacional' },
        { id: '2', nombre: 'Lotería de Navidad' },
        { id: '3', nombre: 'Lotería del Niño' },
    ];

    const navigateToDetalle = (id) => {
        navigation.navigate('DetalleLista', { id });
    };

    return (
        <View>
            <Text>Listas de Lotería</Text>
            <FlatList
                data={loterias}
                renderItem={({ item }) => (
                    <ListaLoteria 
                        nombre={item.nombre} 
                        onPress={() => navigateToDetalle(item.id)} 
                    />
                )}
                keyExtractor={item => item.id}
            />
            <Button title="Agregar Lotería" onPress={() => {/* lógica para agregar lotería */}} />
        </View>
    );
};

export default HomeScreen;