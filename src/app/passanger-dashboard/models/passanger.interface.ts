export interface Passanger {
    _id: string
    id: number
    fullname: string;
    checkedIn: boolean;
    checkedInDate?: number;
    children?: Child[];
    baggage?: string;
  }
  
  export interface Child {
    name: string;
    age: number;
  }
