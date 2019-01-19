import { Customer } from './customer';

export interface ICustomersService {
  getCustomers(): Customer[];
}
