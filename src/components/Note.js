import React from 'react';import { 
    Text, View} from 'react-native';

const Note = () => {
    return (
        <View style={styles.ViewStyling}>
            <Text style={styles.TextStyling}>Press the button below to add a Todo</Text>
        </View>
    )
}

const styles={
    ViewStyling:{
        flex:1,
        height:100,
        alignItems : 'center',
        paddingHorizontal:15,
    },
    TextStyling:{
        fontSize: 28,
        fontWeight:'bold',
        color : "rgb(50,50,50)",
        textAlign:'center',
        top:20
    }
}

export default Note;