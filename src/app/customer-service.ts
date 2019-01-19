import { ICustomersService } from './icustomers-service';
import { Customer } from './customer';

class CustomersService implements ICustomersService {
  getCustomers(): Customer[] {
    const customers: Customer[] = [
      new Customer(11, 'Northwind', 'Bangalore', 12000, true),
      new Customer(12, 'Southwind', 'Bangalore', 12000, true),
      new Customer(13, 'Eastwind', 'Bangalore', 12000, true),
      new Customer(14, 'Westwind', 'Bangalore', 12000, true),
      new Customer(15, 'Oxyrich', 'Bangalore', 12000, true)
    ];

    return customers;
  }
}

export { CustomersService };
