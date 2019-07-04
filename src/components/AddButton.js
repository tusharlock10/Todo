import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

const AddButton =(props)=>{
    return (

        <View style={{alignItems:'center'}}>
            <TouchableOpacity 
            onPress={props.onButtonPress}>

                <View style={[styles.ButtonStyling, {backgroundColor:props.buttonColor}]}>  
                    <Image style={{height:30, width:30}} 
                    source={props.buttonImage}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles={
    ButtonStyling:{
        height:50,
        width:50,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        elevetaion:2
        
    },
}


export default AddButton;