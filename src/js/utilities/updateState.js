//this is a utility function that returns a clickHandler that updates the state of some input during typing
//its used in multiple place so i moved it out here

const updateStateOnChange = (stateSetterFunction) => (event) =>
  stateSetterFunction(event.target.value);

export { updateStateOnChange };
