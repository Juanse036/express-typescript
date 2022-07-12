"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather = exports.Weather || (exports.Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
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
