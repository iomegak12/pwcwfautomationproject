import { CustomersComponent } from './customers-component';
import { Customer } from '../customer';
import { ICustomersService } from '../icustomers-service';

describe('Customers Component Test Suite', () => {
  let customersService: any;
  let customersComponent: CustomersComponent;
  let mockCustomers: Customer[];

  beforeEach(() => {
    mockCustomers = [
      new Customer(1, 'ABC', 'BLR', 12000, true),
      new Customer(2, 'IJK', 'BLR', 12000, false),
      new Customer(3, 'XYZ', 'BLR', 12000, true)
    ];

    customersService = jasmine.createSpyObj('ICustomersService', ['getCustomers']);
    customersService.getCustomers.and.returnValues(mockCustomers);
  });

  it('Should Initialize set Customers Property', () => {
    customersComponent = new CustomersComponent(customersService);
    customersComponent.initialize();

    expect(customersComponent.customers).toBeDefined();
    expect(customersComponent.customers.length).toBe(3);
    expect(customersComponent.customers[1].status).toBe(false);
    expect(customersService.getCustomers).toHaveBeenCalledTimes(1);
  });

  it('Should throw an exception when dependencies set to null', () => {
    customersComponent = new CustomersComponent(null);

    expect(() => customersComponent.initialize()).toThrow(new Error('Invalid Customer Service Specified!'));
  });

  it('Should set Error Message property when getCustomers() called', () => {
    customersService = jasmine.createSpyObj('ICustomersService', ['getCustomers']);
    customersService.getCustomers.and.throwError(new Error('Throws Error Always!'));

    customersComponent = new CustomersComponent(customersService);
    customersComponent.initialize();

    expect(customersComponent.errorMessage).toBe('Error Occurred');
  });

  afterEach(() => {
    console.log('Cleanup Completed!');
  });
});
