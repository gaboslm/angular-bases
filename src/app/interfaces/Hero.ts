import type { Power } from "./Power"

export interface Hero {
  image?: string
  name: string
  alter: string
  age: number
  powers: Power[]
}
