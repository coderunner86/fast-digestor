export interface Task {
  description: string;
  state: number;
  category: string;
  priority: Priority;
  deliveryDate: string;
  progress: number;
  costumeName: string;
  factNum: number;
}

export interface Priority {
  description: string;
  color: string;
}
