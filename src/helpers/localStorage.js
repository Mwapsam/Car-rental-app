const LocalStorage = {
  getUser: () => JSON.parse(localStorage.getItem('user')),

  setUser: (value) => {
    localStorage.setItem('user', JSON.stringify(value));
  },

  removeUser: () => {
    localStorage.removeItem('user');
  },
};

export default LocalStorage;
