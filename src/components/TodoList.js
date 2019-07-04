import React, { Component } from "react";
import { 
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    LayoutAnimation,
    UIManager,
    Platform,
    FlatList
 } from "react-native";
import { AddButtonAction, LoadTodosAction, SaveButtonAction } from "../actions";
import { connect } from "react-redux";
import AddButton from "./AddButton";
import TodoText from "./TodoText";
import Note from "./Note";


class TodoList extends Component {
  
  constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillMount() {
      this.props.LoadTodosAction();
  }

  componentWillUpdate(){
    const CustomLayoutSpring = {
      duration: 750,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 1,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 1,
      },
    };

    LayoutAnimation.configureNext(CustomLayoutSpring);
  }

  onAddButtonPress() {
    this.props.AddButtonAction();
  }

  onDeleteButtonPress(){
    const {id} = this.props;
    this.props.DeleteButtonAction(id);
  }

  getAddButtonObj() {

    if (this.props.text_changed){
      return {
        buttonColor : "rgb(219, 22, 47)",
        buttonImage : require('../../assets/images/save.gif'),
        onButtonPress : this.props.SaveButtonAction.bind(this)
    }}
    
    return {
        buttonColor : "rgb(0,161,255)",
        buttonImage : require('../../assets/images/add.png'),
        onButtonPress : this.onAddButtonPress.bind(this)
    }

  }

  renderTodos() {
    if (this.props.todos.length === 0) {
      return <Note />;
    }

    return (
      <FlatList key={1}
      data={this.props.todos}
      keyExtractor={(todo_obj) => todo_obj.id.toString()}
      renderItem ={(todo_obj) =>{
          const { id, todo, lineColor } = todo_obj.item;
          const R = Math.abs(lineColor[0]) + ",";
          const G = Math.abs(lineColor[1]) + ",";
          const B = Math.abs(lineColor[2]);
          const rgb_linecolor = "rgb(" + R + G + B + ")";
          
    
          // Here we are returning a TodoText object
          return (
            <View style={{flex:1, paddingBottom:3}}>
              <TodoText todo={todo} id={id} lineColor={rgb_linecolor}
              onPress={this.onDeleteButtonPress} />
            </View>
          );
        }}
      />

    )
  }

  getLoadedContent(AddButtonOjb){
    if (this.props.is_loading){

      return (
        <View style={{flex:1, alignItems:"center", justifyContent: "center"}}>
          <ActivityIndicator size='large' color="orange"/>
        </View>
      )

    }

    return (
      <View style={{flex:1}}>
        <ScrollView
        nestedScrollEnabled
        bouncesZoom
        >
          {this.renderTodos()}
        </ScrollView>

        <View style={{ height: 1, justifyContent: "flex-end" }}>
          <AddButton onButtonPress={AddButtonOjb.onButtonPress}
          buttonColor = {AddButtonOjb.buttonColor}
          buttonImage = {AddButtonOjb.buttonImage}
          />
        </View>
      </View>
    )
  }

  render() {

    const AddButtonOjb = this.getAddButtonObj()
    
    

    return (
      <View style={{ flex: 1 }}>
        {this.getLoadedContent(AddButtonOjb)}
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    num: state.TodoList.num,
    todos: state.TodoList.todos,
    text_changed: state.TodoList.text_changed,
    is_loading: state.TodoList.is_loading
  };
};

export default connect(
  mapStateToProps,
  { AddButtonAction, LoadTodosAction, SaveButtonAction }
)(TodoList);
