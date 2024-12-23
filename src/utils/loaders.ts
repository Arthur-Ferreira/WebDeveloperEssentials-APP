import { json } from "react-router-dom";

export async function allProductsLoader(): Promise<IProduct> {
  let url = "http://localhost:3031"
  try {
    const response = await fetch(`${url}/products`)

    if (!response.ok) {
      throw json({ message: "Error on fetching all Products!" }, { status: 500 })
    } else {
      return response.json() as Promise<IProduct>
    }
  } catch (err) {
    throw err
  }

}

