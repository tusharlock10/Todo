import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TextInput, View, TouchableOpacity, Image, Text} from 'react-native';
import {
    DeleteButtonAction,
    onChangeTextAction,
} from '../actions';



class TodoText extends Component{

    // onChangeText(text){
    //     this.props.onChangeTextAction(text)
    // }

    onDeleteButtonPress(){
        const {id} = this.props;
        this.props.DeleteButtonAction(id);

    }

    onChangeText(todo_text){

        const {id} = this.props;
        this.props.onChangeTextAction(id, todo_text)
    }
    render(){

        return(
         
            <View style={[styles.TextInputViewStyling,{borderColor: this.props.lineColor}]}>
                <View style={{flex:8}}>
                    <TextInput style={styles.TextInputStyling}
                    placeholder="Enter todo here"
                    onChangeText={this.onChangeText.bind(this)}
                    value = {this.props.todo}/>
                </View>

                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.ButtonStyle}
                    onPress = {this.onDeleteButtonPress.bind(this)}>
                        
                        <Image source={require('../../assets/images/bin.png')} 
                        style={styles.ImageStyling}/>
                    </TouchableOpacity>
                </View>
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
        fontSize:20,
        paddingTop:5
    },
    ImageStyling:{
        height:18,
        width:18,
    }
}



export default connect(null, {DeleteButtonAction,
     onChangeTextAction})(TodoText);