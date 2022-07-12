import { Weather, Visibility } from "./enums";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

//Crear un tipo de la interface Omitiendo el dato que no se usara
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

/*
//Crear un tipo de la interface seleccionando los datos que usaran
export type NonSensitiveInfoDiaryEntry = Pick<
  DiaryEntry,
  "id" | "date" | "weather" | "visibility"
>;
*/
/*
//Extender propiedades de interfaces
interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
}
*/
