const convertDate = (date) => {
  const event = new Date(date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return event.toLocaleDateString('en-US', options);
};

export default convertDate;
