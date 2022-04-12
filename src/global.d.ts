/// <reference types="svelte" />

import APP_BRIDGE from "../src/electron/preload";

declare global {
    interface Window {api: typeof APP_BRIDGE}
}

export interface LightingDevice {
    coordinates: number[]
    instrumentType: string
    fixtureMode: string
    wattage: string
    weight: string
    frameSize: string
    position: string
    purpose: string
    channel: number
    unitNumber: string
    patch: string
    circuitNumber: string
    circuitName: string
    dmxLine: string
    dmxFootprint: number
    deviceType: string
    color: string
    template1: string
    template2: string
    userField1: string
    userField2: string
    userField3: string
    userField4: string
    userField5: string
    userField6: string
    rotation: number
    __UID: string
    class: string
    layer: string
  }

  export interface VWInfo {
    fileName: string
    fixtureCount: string
    exportDate: string
    exportTime: string
  }

  export interface Wrap{
    VWInfo: VWInfo[]
    LightingDevices: LightingDevice[]
  }