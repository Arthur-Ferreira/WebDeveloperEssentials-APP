import { json, Params } from "react-router-dom";

const url = "http://localhost:3031"

export async function allProductsLoader(): Promise<IProduct> {
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

export async function productDetailsLoader({ params }: { params: Params }): Promise<IProduct> {
  try {
    const response = await fetch(`${url}/products/${params.id}`)

    if (!response.ok) {
      throw json({ message: `Error on fetching Product: ${params.id}!` }, { status: 404 })
    } else {
      return response.json() as Promise<IProduct>
    }
  } catch (err) {
    throw err
  }

}

