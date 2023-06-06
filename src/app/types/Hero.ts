import type { Power } from "./Power"

export interface Hero {
  name: string
  alter: string
  age: number
  powers: Power[]
}
