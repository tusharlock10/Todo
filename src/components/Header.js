import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as Font from 'expo-font'
import { View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {CrossButtonAction} from '../actions';



class Header extends Component{
    constructor(){
        super();
        this.state={
            fontLoaded: false
        }
    }

    async componentDidMount(){
        await Font.loadAsync({
            'Gotham-Black':require('../../assets/fonts/Gotham-Black.ttf')
        })

        this.setState({fontLoaded:true})
    }
    


    onCrossButtonPress(){
        this.props.CrossButtonAction()
    }

    renderHeader(){
        if (this.state.fontLoaded){
            return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row',}}>
                <View style={styles.CrossButtonViewStyle}/>

                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.TextStyling}
                    selectable={true}>YOUR TODOs</Text>
                </View>

                <View style={styles.CrossButtonViewStyle}>
                    <TouchableOpacity
                    onPress={this.onCrossButtonPress.bind(this)}>
                        <Image source={require('../../assets/images/cross.png')}
                        style={{height:24, width:24}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
        }
    }
    
    render(){
        return (
            <View style={styles.HeaderStyling}>
                {this.renderHeader()}
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
        marginBottom:10,
        flexDirection:'row',

    },
    TextStyling:{
        top:10,
        color:'rgb(230,230,230)',
        fontSize:36,
        fontFamily:'Gotham-Black'

    },
    CrossButtonViewStyle:{
        top:10,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:5
    }
}

export default connect(null, {CrossButtonAction})(Header);