import * as Font from 'expo-font'
import React, {Component} from 'react';
import { 
    Dimensions,
    View,
    Image
} from 'react-native';
import NoteData from '../NoteData'


class Note extends Component{
    constructor(){
        super();
        this.state={
            fontLoaded: false,
            index:0,
            text:'',
            image:false,
            imgSizeSub:0
        }
    }

    renderNoteHelper(){
        var text, image, index;
        index = this.state.index
        if (index===NoteData.length){
            index = 0;
        }
        var obj = NoteData[index];
        text = obj.text;
        image = obj.image
        imgSizeSub= obj.imgSizeSub
        index = index + 1

        this.setState({index: index, text: text, image:image, imgSizeSub:imgSizeSub})
    }

    componentWillMount(){
        this.renderNoteHelper()
    }

    componentDidUpdate(){
        this.timeoutHandle = setTimeout(()=>{
            (this.mounted && this.renderNoteHelper())
       }, 5000);
    }

    async componentDidMount(){
        this.mounted = true;
        await Font.loadAsync({
            'Gotham-Black':require('../../assets/fonts/Gotham-Black.ttf')
        })

        this.setState({fontLoaded:true})
    }
    
    componentWillUnmount(){
        this.mounted = false;
        clearTimeout(this.timerHandle);
  
    }
    renderNote(){
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        var usableWidth;

        if (screenWidth>screenHeight){
            usableWidth = Math.round(screenHeight * this.state.imgSizeSub);
        }
        else {
            usableWidth = Math.round(screenWidth * this.state.imgSizeSub);
        }
        
        if (this.state.fontLoaded){ 
            return (
            
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

                {this.state.text}

                {
                    (this.state.image!==false)?
                    <Image source={this.state.image}
                    style={{width: usableWidth, height:usableWidth, marginTop:20}}/>
                    :<Image/>

                }
            </View>
            
            )
        }
    }

    render(){
        return (
        <View style={styles.ViewStyling}>
            {
                this.renderNote()
            }
        </View>
        )
    }
}

const styles={
    ViewStyling:{
        flex:1,
        alignItems : 'center',
        paddingHorizontal:15,
    }
}

export default Note;