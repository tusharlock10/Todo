import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

const AddButton =(props)=>{
    return (

        <TouchableOpacity style={{alignItems:'center'}}
        onPress={props.onButtonPress}>

            <View style={styles.ButtonStyling}>
                <Image style={{height:24, width:24}} 
                source={require('../../assets/images/add.png')}/>
            </View>
        </TouchableOpacity>
    );
}

const styles={
    ButtonStyling:{
        height:50,
        width:50,
        backgroundColor:"rgb(0,191,255)", //'#29AB87',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        elevetaion:2
        
    },
}


export default AddButton;