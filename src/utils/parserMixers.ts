import { ObjectId } from "mongodb";

function parseMixedString(value: ObjectId | { $oid: string }) {
  if (typeof value === "object" && "$oid" in value) {
    return value.$oid
  }
}

function parseMixedNumber(value: number | { $numberInt: string }): number {
  return typeof value === "number" ? value : parseInt(value.$numberInt, 10)
}

function parseMixedDate(date: Date | { $date: { $numberLong: string; }; }) {
  if (typeof date === "object" && "$date" in date) {
  const timestamp = parseInt(date.$date.$numberLong, 10)
  const parsedDate = new Date(timestamp)
    return parsedDate.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
}

export { parseMixedString, parseMixedNumber, parseMixedDate }