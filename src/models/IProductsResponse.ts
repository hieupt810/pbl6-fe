import IPagination from './IPagination';
import IProduct from './IProduct';

type IProductsResponse = {
  data: IProduct[];
  pagination: IPagination;
};

export default IProductsResponse;
