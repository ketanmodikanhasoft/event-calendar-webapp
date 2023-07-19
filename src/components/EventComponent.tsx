import { EventProps } from "./model";

// component used fore custom render events on calendar
const EventComponent = ({ eventData }: EventProps) => {
  return (
    <div>
      <div className="title">{eventData.title}</div>
      <div className="description">Description</div>
    </div>
  );
};

export default EventComponent; // single default export
