import React, { Component } from "react";
import NavBar from "./navbar";
import { TaskAdd } from "./taskCU";
import TaskDisplay from "./taskDisplay";
import firebase from "./firebase";
import Login from "./login";

class Content extends Component {
  constructor(props) {
    super();
    this.state = {
      tasks: [],
      task: "",
      placeholder: "Enter here...",
      login: true,
    };

    if (localStorage.getItem("isLoggedIn") === null) {
      this.state.login = false;
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const tasks = [...this.state.tasks];
    const firestore = firebase.firestore;
    firestore
      .collection("tasks")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          // console.log(doc.data().todo + doc.id);
          tasks.push({ todo: doc.data().todo, id: doc.id });
        });
        this.setState({
          tasks,
        });
      })
      .catch((err) => console.log(err));
  }

  onChangeHandler = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    if (this.state.task === "") {
      return;
    }

    // add: auto generate id
    const firestore = firebase.firestore;
    firestore
      .collection("tasks")
      .add({ todo: this.state.task })
      .then((res) => {
        const tasks = [
          ...this.state.tasks,
          { id: res.id, todo: this.state.task },
        ];
        this.setState({
          tasks,
          task: "",
        });
      });
  };

  deleteHandler = (id) => {
    const firestore = firebase.firestore;
    firestore
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        const tasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({
          tasks,
        });
      });
  };

  checkLogin = () => {
    if (localStorage.getItem("isLoggedIn")) {
      this.setState({
        login: true,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.login ? (
          <div>
            <NavBar login={this.checkLogin} />
            <div className="container">
              <TaskAdd
                value={this.state.task}
                placeholder={this.state.placeholder}
                changeHandler={this.onChangeHandler}
                clickHandler={this.onClickHandler}
              />
              <TaskDisplay
                tasks={this.state.tasks}
                deleteHandler={this.deleteHandler}
              />
            </div>
          </div>
        ) : (
          <Login login={this.checkLogin} />
        )}
      </React.Fragment>
    );
  }
}

export default Content;
