import { PureComponent } from "react";
import $ from "./style.css";

const weekDaysNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const weekDaysNamesSmall = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekDaysNamesXSmall = ["M", "T", "W", "T", "F", "S", "S"];

class WeekDays extends PureComponent {
  state = {
    WeekDays: null
  };
  componentDidMount() {
    const { isMultipleView } = this.props;

    this.setState({
      weekDays:
        window.innerWidth > 640 && !isMultipleView
          ? weekDaysNames
          : window.innerWidth > 480 && !isMultipleView
          ? weekDaysNamesSmall
          : weekDaysNamesXSmall
    });
    window.addEventListener("resize", () => this.setWeekDaysName());
  }
  setWeekDaysName() {
    const { isMultipleView } = this.props;

    this.setState({
      weekDays:
        window.innerWidth > 640 && !isMultipleView
          ? weekDaysNames
          : window.innerWidth > 480 && !isMultipleView
          ? weekDaysNamesSmall
          : weekDaysNamesXSmall
    });
  }
  render() {
    const { weekDays } = this.state;
    return (
      <div className={$.container}>
        {weekDays == null
          ? null
          : weekDays.map((weekDay, key) => {
              return (
                <div key={key} className={$.week_day}>
                  {weekDay}
                </div>
              );
            })}
      </div>
    );
  }
}

export default WeekDays;
