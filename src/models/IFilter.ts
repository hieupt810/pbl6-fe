import ISelectItem from './ISelectItem';

type IFilter = {
  options: ISelectItem[];
  parameter: string;
  placeholder: string;
};

export default IFilter;
