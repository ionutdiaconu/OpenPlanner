export interface Category {
    title: string;
    id: string;
    tasks: Task[];
  }
  
  export interface Task {
    title: string;
    description: string;
    id: string;
  }
  