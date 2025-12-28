import axios from 'axios';
import { CompanySearch } from './company';
import { isAxiosError } from 'axios';

interface SearchResponse {
    data: CompanySearch[];
} 

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-name?query=AA&apikey=${process.env.REACT_APP_API_KEY}`);
    
        return data.data;}
    catch (error) {
        if(isAxiosError(error)){
            console.log("Error Message", error.message);
            return error.message;
        }else{
            console.log("Unexpected Error", error);
            return "An unexpected error occurred";
        }
    }

}