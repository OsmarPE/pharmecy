import { API } from "./api"


export const getLocations = async () => {
    const response = await API.get("/locations")
    return response.data
}