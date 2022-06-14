import carsSlice  from "./carMock";
import ApiMock from "./ApiMock"
import { getCars, updateCar, deleteCars, createCar } from "./carServise"

test('Test initialState', () => {
	const state = carsSlice([], getCars())
  expect(state).toEqual({ carsList: ApiMock, status: true})
 })
