// Generated by https://quicktype.io

import { Appoiment } from "./cita";

export interface AppoResponse {
  success:     boolean;
  api_message: string;
  data:        Appoiment[];
}

export interface AppoResponse2 {
  success:     boolean;
  api_message: string;
  data:        Appoiment;
}