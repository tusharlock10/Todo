import * as Font from 'expo-font'
import React, {Component} from 'react';
import { 
    Text,
    View
} from 'react-native';

class Note extends Component{
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

    renderText(){
        
        if (this.state.fontLoaded){
            return (<Text style={styles.TextStyling}>
            Press the button below to add a Todo
            </Text>)
        }
    }

    render(){
        return (
        <View style={styles.ViewStyling}>
            {
                this.renderText()
            }
        </View>
        )
    }
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
        fontFamily:'Gotham-Black',
        color : "rgb(50,50,50)",
        textAlign:'center',
        top:20
    }
}

export default Note;