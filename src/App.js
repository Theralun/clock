import React from "react";
import "./App.css";

class App extends React.Component {
  state = { light: false };

  componentDidMount = async () => {
    let res = await fetch(
      "https://worldtimeapi.org/api/timezone/Europe/Vienna"
    ).then((res) => {
      return res.json();
    });

    // for time;
    const deg = 6;
    // 360 / (12 * 5);

    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    let offset = 0;
    let time = res.unixtime * 1000;
    let tickspeed = 100;

    setInterval(async () => {
      offset += tickspeed * 1.01;

      if (offset > 30000) {
        offset = 0;

        res = await fetch(
          "https://worldtimeapi.org/api/timezone/Europe/Vienna"
        ).then((res) => {
          return res.json();
        });

        time = res.unixtime * 1000;
      }

      let day = new Date(time + offset);
      let hh = day.getHours();
      let mm = day.getMinutes();
      let ss = day.getSeconds();
      let msec = day.getMilliseconds();

      let ssms = ss + msec / 1000;
      let mmssms = mm + ssms / 60;
      let hhmmssms = hh + mmssms / 60;

      // VERY IMPORTANT STEP:

      hr.style.transform = `rotateZ(${hhmmssms * 30}deg)`;
      mn.style.transform = `rotateZ(${mmssms * deg}deg)`;
      sc.style.transform = `rotateZ(${ssms * deg}deg)`;

      this.setState({ hour: hh, minute: mm, second: ss, msecond: msec });
    }, tickspeed);
  };

  toggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  pad(num, size) {
    let s = num + "";

    while (s.length < size) s = "0" + s;

    return s;
  }

  render() {
    return (
      <div id="clock" className={this.state.light ? "light" : "dark"}>
        <div className="clock">
          <div className="hour">
            <div className="hr" id="hr"></div>
          </div>

          <div className="min">
            <div className="mn" id="mn"></div>
          </div>

          <div className="sec">
            <div className="sc" id="sc"></div>
          </div>
        </div>
        {this.state.msecond !== undefined && (
          <div className="d-flex justify-content-between digital">
            <div>{this.state.hour}</div>
            <div>:</div>
            <div>{this.state.minute}</div>
            <div>:</div>
            <div>{this.state.second}</div>
            <div>:</div>
            <div>{this.pad(this.state.msecond, 3)}</div>
          </div>
        )}
        <div className="toggleClass" onClick={this.toggleLight}></div>
      </div>
    );
  }
}

export default App;
