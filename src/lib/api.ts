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

export const getCharacters = async (
    params: { limit: number; skip: number; query: string}
): Promise<{
    limit: number;
    skip: number;
    total: number;
    products: TCharacter[];
}> => {
    const response = await api.get("/products/search", {
          params: {
            limit: params.limit ?? 10,
            skip: params.skip ?? 0,
            q: params.query ?? "",
        },
    })
    return response.data;
};
