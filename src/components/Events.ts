import { Events } from "./model";
import moment from "moment";

// default event list
const MyEventsList: Events[] = [
  {
    title: "Sample Item",
    start: moment().set("hour", 9).set("minutes", 30).toDate(),
    end: moment().set("hour", 11).set("minutes", 30).toDate(),
  },
  {
    title: "Sample Item",
    start: moment().set("hour", 18).set("minutes", 0).toDate(),
    end: moment().set("hour", 19).set("minutes", 0).toDate(),
  },
  {
    title: "Sample Item",
    start: moment().set("hour", 19).set("minutes", 10).toDate(),
    end: moment().set("hour", 20).set("minutes", 10).toDate(),
  },
  {
    title: "Sample Item",
    start: moment().set("hour", 18).set("minutes", 20).toDate(),
    end: moment().set("hour", 19).set("minutes", 20).toDate(),
  },
];

export default MyEventsList;
