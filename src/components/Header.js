import React, {Component} from 'react';
import {connect} from 'react-redux'
import { View, Text, Image, TouchableOpacity} from 'react-native';
import {CrossButtonAction} from '../actions';



class Header extends Component{

    onCrossButtonPress(){
        this.props.CrossButtonAction()
    }
    
    render(){
        return (
        <View style={styles.HeaderStyling}>
            <View style={styles.HeaderViewStyling}>
                <Text style={styles.TextStyling}
                selectable={true}>TODO   LIST</Text>
            </View>

            <View style={styles.CrossButtonViewStyle}>
                <TouchableOpacity
                onPress={this.onCrossButtonPress.bind(this)}>
                    <Image source={require('../../assets/images/cross.png')}
                    style={{height:20, width:20}}/>
                </TouchableOpacity>
            </View>
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

        elevation:20,
        marginBottom:10,
        flexDirection:'row'

    },
    TextStyling:{
        top:10,
        color:'rgb(230,230,230)',
        fontSize:36,
        fontWeight:'bold',
    },
    CrossButtonViewStyle:{
        marginTop:28,
        flex:1,
        alignItems:'center',
        paddingRight:6,

    },
    HeaderViewStyling:{
        flex:4,
        alignItems:'flex-end',
        paddingRight:5,
    }
}

export default connect(null, {CrossButtonAction})(Header);