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

// test('Test delete car action', () => {
// 	const prevState = {
//     carsList: ApiMock,
//     status: null,
//   }
// 	const state = carsSlice(prevState, deleteCars())
// 	const updateAPI = [ApiMock[1], ApiMock[2]];
//   expect(state).toEqual({ carsList: updateAPI, status: 'success delete action'})
//  })
