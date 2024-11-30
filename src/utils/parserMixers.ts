import { ObjectId } from "mongodb";

function parseMixedString(value: ObjectId | { $oid: string }) {
  if (typeof value === "object" && "$oid" in value) {
    return value.$oid
  }
}

function parseMixedNumber(value: number | { $numberInt: string }): number {
  return typeof value === "number" ? value : parseInt(value.$numberInt, 10)
}

export { parseMixedString, parseMixedNumber }