import React from 'react';
import data from '../app.json'
import { 
    Text, 
    Image, 
    View, 
    Platform, 
    Linking,
    TouchableOpacity
} from 'react-native';


const appID = data.expo.android.package;
console.log(appID)

var StoreImage;
var StoreLink;

const styles={
    TextStyling:{
        fontSize: 28,
        fontFamily:'Gotham-Black',
        color : "rgb(50,50,50)",
        textAlign:'center',
        marginTop:5
    }
}

const rating =()=>{
    if (Platform.OS === 'android'){
        StoreImage = require('../assets/images/PlayStore.png')
        StoreLink = `https://play.google.com/store/apps/details?id=${appID}&hl=en`
    }
    else {
        StoreImage = require('../assets/images/AppStore.png')
        StoreLink = `itms://itunes.apple.com/us/app/apple-store/${appID}?mt=8`
    }

}
rating();
const LinkHelper =() => {Linking.openURL(StoreLink)}

const NoteData = [
    {text:(<Text style={styles.TextStyling}>
        Welcome to TODOs app
        </Text>), image: false, imgSizeSub:1},

    {text:(<Text style={styles.TextStyling}>
        This is the <Text style={{color:'rgb(76, 187, 23)'}}>INTRO</Text> page,
        take the intro before you start
        </Text>), image: false, imgSizeSub:1},

    {text:(<Text style={styles.TextStyling}>
        Swipe from left to reveal the <Text style={{color:"rgb(255, 0, 51)"}}>DELETE</Text> button
        </Text>), image: require('../assets/images/DeleteDemo.png'), imgSizeSub:0.6},

    {text:(<Text style={styles.TextStyling}>
        Increase the volume for <Text style={{color:"rgb(150,113, 187)"}}>SOUND</Text> effects
        </Text>), image: require('../assets/images/volume.png'), imgSizeSub:0.1},

    {text:(<Text style={styles.TextStyling}>
        Don't forget to <Text style={{color:"rgb(219, 22, 47)"}}>SAVE</Text> your
        todo, when completed writing
        </Text>), image: require('../assets/images/PressSaveButton.png'), imgSizeSub:0.3},

    {text:(<Text style={styles.TextStyling}>
        To clear all of your TODOs at <Text style={{color:"rgb(220, 62, 62)"}}>ONCE</Text>,
        tap on the cross
        </Text>), image: require('../assets/images/PressCrossButton.png'), imgSizeSub:0.3},

    {text:(<Text style={styles.TextStyling}>
        Now, press the <Text style={{color:"rgb(0,161,255)"}}>BUTTON</Text> below to start
        </Text>), image: require('../assets/images/PressAddButton.png'), imgSizeSub:0.3},

    {text:(
        <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={LinkHelper.bind(this)}>
                <View style={{flexDirection:'row', marginBottom:0.6}}>
                
                    <Text style={[styles.TextStyling, {fontSize:36}]}>
                    Rate the app on </Text>
                
                    <Image source={StoreImage}
                    style={{margin:5, height:36, width:36}}/>
               
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={LinkHelper.bind(this)}>
                    <Image source={require('../assets/images/Rating.png')}
                    style={{height:100, width:100}}/>
                </TouchableOpacity>
        </View>
        ), 
        image: false, imgSizeSub:0},
]


export default NoteData;