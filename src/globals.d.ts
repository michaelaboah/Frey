/// <reference types="svelte" />

import {API} from "./electron/preload"

declare global {
  interface Window {api: typeof API}
}



export interface SavedData {
  ProductionInformation: { [key: string]: null | string };
  VWInfo:                VWInfo[];
  Notes:                 { [key: string]: Note[] };
  SystemsList:           any[];
  CueList:               any[];
  LightingDevices:       LightingDevice[];
}

export interface Wrap{
  VWInfo:                VWInfo[];
  LightingDevices:       LightingDevice[];
}

export interface LightingDevice {
  coordinates:    number[];
  instrumentType: string;
  fixtureMode:    string;
  wattage:        string;
  weight:         number;
  frameSize:      number;
  position:       string;
  purpose:        string;
  channel:        number;
  unitNumber:     string;
  patch:          string;
  circuitNumber:  string;
  circuitName:    string;
  dmxLine:        string;
  dmxFootprint:   number;
  deviceType:     string;
  color:          string;
  template1:      string;
  template2:      string;
  userField1:     string;
  userField2:     string;
  userField3:     string;
  userField4:     string;
  userField5:     string;
  userField6:     string;
  rotation:       number;
  __UID:          string;
  class:          string;
  layer:          string;
}


export interface Note {
  dateCreated:        string;
  modifiedOn:         string;
  completionStatus:   boolean;
  writtenInformation: null | string;
  noteName:           null | string;
  noteType:           number;
}

export interface VWInfo {
  fileName:     string;
  fixtureCount: string;
  exportDate:   string;
  exportTime:   string;
}


