import carsSlice   from "./carMock";
import ApiMock from "./ApiMock"
import { getCars, updateCar, deleteCars, createCar } from "./carServise"

test('Test get cars action', async () => {
	const prevState = {
    carsList: [],
    status: null,
  }
	const action = getCars.fulfilled(ApiMock);
	const state = carsSlice(prevState, action)
  expect(state.status).toEqual('success')
 })

 test('Test delete car action', () => {
	const prevState = {
    carsList: ApiMock,
    status: null,
  };
	const action = deleteCars.fulfilled(1);
	const state = carsSlice(prevState, action)
  expect(state.status).toEqual('success delete action')
 })

 test('Test update Car action', () => {
	const prevState = {
    carsList: ApiMock,
    status: null,
  };
	const updatedCar = {
		"id": 1,
		"name": "BMW",
		"reserved": true,
		"description": "blue",
		"price": "15.0",
		"pictures": null,
		"user": {
			"id": 1,
			"name": "Admin",
			"email": "admin@mail.com",
			"password_digest": "$2a$12$hFg9VbTQII4Cn9vUhi0zS.pcuB1xm97TXGAGc17ZuLcRY9znVDU9C"
		}
	};
	const action = updateCar.fulfilled(updatedCar);
	const state = carsSlice(prevState, action)
  expect(state.status).toEqual('success update action')
 })
