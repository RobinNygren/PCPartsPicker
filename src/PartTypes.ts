export type Chassis = {
  id: string;
  brand: string;
  model: string;
  formFactor: string;
  material: string;
  type: string;
  price: number;
  img: string;
};

export type ChassisData = {
  chassis: Chassis[];
};

export type PartsState = {
  chassis: Chassis[];
};
