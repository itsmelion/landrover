import moxios from 'moxios';
import { getData, getDetails } from 'api';

const mockData = {
  list: {
    vehicles: [
      {
        id: 'xf',
        modelYear: 'k17',
        url: '/api/vehicle/xf',
        media: [{ name: 'vehicle', url: '/images/xf_k17.jpg' }],
      }
    ]
  },
  details: {
    id: 'xf',
    description: 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
    price: '£36,000',
    meta: {
      passengers: 5,
      drivetrain: [
        'AWD',
        'RWD'
      ],
      bodystyles: [
        'saloon'
      ],
      emissions: {
        template: 'CO2 Emissions $value g/km',
        value: 104
      }
    }
  },
};

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

describe('Integration tests', () => {
  it('should respond with an array of vehicles', (done) => {
    moxios.stubRequest(`${process.env.REACT_APP_API}/api/vehicle`, {
      status: 200,
      response: mockData.list,
    });

    getData().then((vehiclesList) => {
      expect(Array.isArray(vehiclesList)).toEqual(true);
      expect(vehiclesList).toContain(mockData.list.vehicles[0]);
      done();
    })
  });

  it('should return an object with vehicle data', (done) => {
    const id = 'xf';
    moxios.stubRequest(`${process.env.REACT_APP_API}/api/vehicle/${ id }`, {
      status: 200,
      response: mockData.details,
    });

    getDetails(id).then((vehicle) => {
      expect(vehicle.id === id).toBeTruthy();
      expect(vehicle.id === 'notAnID').toBeFalsy();
      expect(vehicle).toEqual(mockData.details);

      done();
    })
  });
});
