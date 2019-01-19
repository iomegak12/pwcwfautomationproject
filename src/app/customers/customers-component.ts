import { ICustomersService } from '../icustomers-service';
import { Customer } from '../customer';

class CustomersComponent {
  public customers: Customer[] = [];
  public errorMessage: string;

  constructor(private customersService: ICustomersService) {}

  initialize() {
    if (this.customersService === null) {
      throw new Error('Invalid Customer Service Specified!');
    }

    try {
      this.customers = this.customersService.getCustomers();
    } catch (error) {
      this.errorMessage = 'Error Occurred';
    }
  }
}

export { CustomersComponent };
