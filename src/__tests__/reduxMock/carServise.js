import ApiMock from "./ApiMock";
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getCars = () => {
// 	return ApiMock;
// }
export const getCars = createAsyncThunk (
	'cars/getCars', async () => {	
		return ApiMock;
	}
);

export const deleteCars = createAsyncThunk (
	'cars/deleteCars', async () => {
		return 1;
	}
)

export const updateCar = createAsyncThunk (
	'cars/updateCar', async () => {
		const updatedCar = {
			"id": 1,
			"name": "BMW",
			"reserved": false,
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
		return updatedCar;
	}
);

export const createCar = createAsyncThunk (
	'cars/createCar', async () => {
		const newCar = {
			"id": 4,
			"name": "Renault",
			"reserved": false,
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
		return newCar;
	}
);
