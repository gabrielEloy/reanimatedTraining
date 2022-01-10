import React from 'react'
import { View, Text, FlatList, StyleSheet, Button} from 'react-native'

const modules = [{
    id: 1,
    name: 'Opacity',
    key: 'opacity',
},
]

export default function Home({ navigation }) {
    return (
        <View style={styles.container} >
            <FlatList
            style={styles.flatListContainer} 
                data={modules}
                renderItem={({item}) => (
                    <View style={styles.itemList}>
                        <Button onPress={() => {
                    navigation.push(item.key)
                }} title={item.name}/>
                        
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    flatListContainer: {
        width: '100%',
    },
    itemList: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})