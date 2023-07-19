import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import MyEventList from "./Events";
import { Events, AddEvent } from "./model";
import EventComponent from "./EventComponent"; // custom event component

const localizer = momentLocalizer(moment);
const minTime = moment().set("hour", 9).set("minutes", 0).toDate();
const maxTime = moment().set("hour", 21).set("minutes", 30).toDate();

// Main component which is used to render the function
const CalenderEvent = () => {
  let [lastWatchLesson, setLastWatchLesson] =
    React.useState<Events[]>(MyEventList);

  // Function which will called from the console
  const layOutDay = ({ start, end }: AddEvent) => {
    if (start >= 0 && end > 0 && start < 720 && end <= 720) {
      let sstart = moment()
        .set("hour", 9)
        .set("minutes", 0)
        .add(start, "minute")
        .toDate();
      let eend = moment()
        .set("hour", 9)
        .set("minutes", 0)
        .add(end, "minute")
        .toDate();

      let newData = {
        title: "Sample Item",
        start: sstart,
        end: eend,
      };

      setLastWatchLesson([...lastWatchLesson, newData]);
      return "Event added ";
    } else {
      return "please add start and end value";
    }
  };

  // attach function to window so it can be accesable from console
  (window as any).layOutDay = layOutDay;

  // retun the calendar component
  return (
    <div className="calender-container">
      <h2>Event Calendar</h2>
      <Calendar
        defaultView={Views.DAY}
        localizer={localizer}
        events={lastWatchLesson}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 720 }}
        step={15}
        timeslots={2}
        date={moment().toDate()}
        min={minTime}
        max={maxTime}
        dayLayoutAlgorithm="no-overlap"
        components={{
          event: (eventData) => <EventComponent eventData={eventData} />,
        }}
      />
    </div>
  );
};

export default CalenderEvent; // single default export
