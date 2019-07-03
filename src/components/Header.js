import React, {Component} from 'react';
import { View, Text} from 'react-native';


class Header extends Component{
    
    render(){
        return (
        <View style={styles.HeaderStyling}>
            <Text style={styles.TextStyling}>TODO   LIST</Text>
        </View>
    )}
}

const styles={
    HeaderStyling:{
        backgroundColor: "rgb(50,50,50)",
        width:null,
        height:80,
        justifyContent:'center',
        alignItems:'center',

    },
    TextStyling:{
        top:10,
        color:'rgb(230,230,230)',
        fontSize:36,
        fontWeight:'bold',
    }
}

export default Header;