import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TextInput, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Dimensions} from "react-native";
import {
    DeleteButtonAction,
    onChangeTextAction,
} from '../actions';



class TodoText extends Component{

    onDeleteButtonPress(){
        const {id} = this.props;
        this.props.DeleteButtonAction(id);

    }

    onChangeText(todo_text){

        const {id} = this.props;
        this.props.onChangeTextAction(id, todo_text)
    }
    render(){
        const screenWidth = Math.round(Dimensions.get('window').width) + 150 ;

        return(
         
            <View style={[styles.TextInputViewStyling,{borderColor: this.props.lineColor}]}>
                <ScrollView style={{flex:1}} horizontal={true}
                showsHorizontalScrollIndicator={false}>
                
                    <View style={{flex:1, width:screenWidth}}>
                        <TextInput style={styles.TextInputStyling}
                        multiline={true}
                        placeholder="Enter todo here"
                        enablesReturnKeyAutomatically={true}
                        onChangeText={this.onChangeText.bind(this)}
                        value = {this.props.todo}/>
                    </View>

                    <View style={{flex:1}}>
                        <TouchableOpacity style={styles.ButtonStyle}
                        onPress = {this.props.onPress.bind(this)}>
                            
                            <Image source={require('../../assets/images/bin.png')} 
                            style={styles.ImageStyling}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
       
        )
    }
}

const styles={
    TextInputViewStyling:{
        width:null,
        flex:1,
        borderBottomWidth:3,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:10,
        backgroundColor:"#FFFFFF"
        
    },


    ButtonStyle:{
        backgroundColor:"rgb(255, 0, 51)",
        height:28,
        width:28,
        marginHorizontal:5,
        marginVertical:5,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    TextInputStyling:{
        fontSize:19,
        color:"rgb(50,50,50)",
        paddingTop:5
    },
    ImageStyling:{
        height:18,
        width:18,
    }
}



export default connect(null, {DeleteButtonAction,
     onChangeTextAction})(TodoText);