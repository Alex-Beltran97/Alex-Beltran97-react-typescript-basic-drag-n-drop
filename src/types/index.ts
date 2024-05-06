export type Todo = {
  id: number;
  desc: string;
  status: boolean;
}

export type OnDragEnd = {
  draggableId: string;
  type:        string;
  source:      Destination;
  reason:      string;
  mode:        string;
  destination: Destination | null;
  combine:     null;
}

export type Destination = {
  droppableId: string;
  index:       number;
}
