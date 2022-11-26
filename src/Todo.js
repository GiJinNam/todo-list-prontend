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
    console.log("Event");
  };

  deleteEvenetHandler = () => {
    this.delete(this.state.item);
  };

  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox Checked={item.done} disableRipple />
        <ListItemText>
          <InputBase
            inputProps={{ "aria-label ": "naked" }}
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
            <DeleteOutlined></DeleteOutlined>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
//     return (
//       <div className="Todo">
//         <input
//           type="checkbox"
//           id={this.state.item.id}
//           name={this.state.item.id}
//           checkd={this.state.item.done}
//         />
//         <label id={this.state.id}>{this.state.item.title}</label>
//       </div>
//     );
//   }
// }

export default Todo;
