import "./App.css";
import Todo from "./Todo";
import React from "react";
import { Paper, List, Container } from "@material-ui/core";
import AddTodo from "./AddTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: "0", title: "웅애1", done: true },
        { id: "1", title: "웅애2", done: true },
        { id: "2", title: "웅애3", done: true },
      ],
    };
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems });
    console.log("items : ", this.state.items);
  };

  delete = (item) => {
    const thisItems = this.state.items;
    console.log("전에 업데이트 되었던 아이템 :", this.state.items);
    const newItems = thisItems.filter((e) => e.id !== item.id);
    this.setState =
      ({ items: newItems },
      () => {
        console.log("업데이트 되었던 아이템", this.state.items);
      });
  };

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;
