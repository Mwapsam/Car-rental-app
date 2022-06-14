import ApiMock from "./ApiMock"

export const getCars = () => {
	return ApiMock;
}

export const deleteCars = () => {
	const id = ApiMock[0].id;
	return id;
}

export const createCar = () => {
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

export const updateCar = () => {
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
