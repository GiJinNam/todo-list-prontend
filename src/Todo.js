import {
  ListItem,
  Checkbox,
  ListItemText,
  InputBase,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;
  }

  offReadOnlyMode = () => {
    console.log("Event", this.state.readOnly);
    this.setState({ readOnly: false }, () => {
      console.log("읽기전용으로 변경하시겠습니까? ", this.state.readOnly);
    });
  };

  deleteEvenetHandler = () => {
    this.delete(this.state.item);
  };

  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      this.setState({ readOnly: true });
    }
  };

  editEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  };

  checkboxEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.done = !thisItem.done;
    this.setState({ item: thisItem });
  };

  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
        <ListItemText>
          <InputBase
            inputProps={{
              "aria-label ": "naked",
              readOnly: this.state.readOnly,
            }}
            onClick={this.offReadOnlyMode}
            onChange={this.editEventHandler}
            onKeyPress={this.enterKeyEventHandler}
            type="text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
          />
        </ListItemText>

        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete Todo"
            onClick={this.deleteEvenetHandler}
          >
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default Todo;
