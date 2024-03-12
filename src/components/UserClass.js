import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    // console.log("This is constructor");

    this.state = {
      userInfo: {
        name: "ddsfa",
        location: "Goa",
        avatarURL: "https://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    // console.log("Child component did mount");
    const data = await fetch("https://api.github.com/users/Deeksha1502");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatarURL } = this.state.userInfo;

    // console.log("This is render");
    return (
      <div className="user-card">
        <img src="https://avatars.githubusercontent.com/u/77612609?v=4"></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 342534526245</h4>
      </div>
    );
  }
}
