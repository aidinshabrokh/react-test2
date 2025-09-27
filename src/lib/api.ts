import axios from "axios";

const BASE_URL = "https://dummyjson.com/";

const api = axios.create({
    baseURL: BASE_URL,
});

export type TCharacter = {
      id: string;
      name: string;
      title: string;
      anime: string;
      power: number;
      intelligence: number;
      speed: number;
      strength: number;
      image: string;
      description: string;
      abilities: string[];
      personality: string;
      birthday: string;
      height: string;
      weight: string;
}

export const getCharacters = async (): Promise<{
    limit: number;
    skip: number;
    total: number;
    products: TCharacter[];
}> => {
    const response = await api.get("/products",{
        params:{
            limit:2,
        },
    })
    return response.data;
};