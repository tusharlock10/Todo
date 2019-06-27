import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { AddButtonAction, LoadTodosAction } from "../actions";
import { connect } from "react-redux";
import AddButton from "./AddButton";
import TodoText from "./TodoText";
import Note from "./Note";

class TodoList extends Component {
  onAddButtonPress() {
    this.props.AddButtonAction();
  }
  renderTodos() {
    if (this.props.todos.length === 0) {
      return <Note />;
    }
    return this.props.todos.map(todo_obj => {
      const { id, todo, lineColor } = todo_obj;
      const R = Math.abs(lineColor[0]) + ",";
      const G = Math.abs(lineColor[1]) + ",";
      const B = Math.abs(lineColor[2]);
      const rgb_linecolor = "rgb(" + R + G + B + ")";

      // Here we are returning a TodoText object
      return (
        <TodoText key={id} todo={todo} id={id} lineColor={rgb_linecolor} />
      );
    });
  }

  componentWillMount() {
      this.props.LoadTodosAction();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.ViewStyling} />
          {this.renderTodos()}
        </ScrollView>

        <View style={{ height: 100, justifyContent: "flex-end" }}>
          <AddButton onButtonPress={this.onAddButtonPress.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = {
  ViewStyling: {
    top: 20,
    flex: 5,
    elevation: 20,
    borderRadius: 5,
    shadowOpacity: 10
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    num: state.TodoList.num,
    todos: state.TodoList.todos,
    lineColor: state.TodoList.lineColor
  };
};

export default connect(
  mapStateToProps,
  { AddButtonAction, LoadTodosAction }
)(TodoList);
