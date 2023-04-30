import { ProductStats } from "../const/productEnum";

export interface Iproduct {
    pname: string;
    pdetails: string;
    pstatus: ProductStats
    id: string;
}