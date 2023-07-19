export interface Events {
  title: string;
  start: Date;
  end: Date;
}

export interface AddEvent {
  start: number;
  end: number;
}

export interface EventComp {
  event: Events;
  title: string;
}

export interface EventProps {
  eventData: EventComp;
}
