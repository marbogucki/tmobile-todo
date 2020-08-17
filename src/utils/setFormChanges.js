const setFormChanges = (event, setFormState, formState) => {
  const {
    target: { name },
  } = event;
  const value =
    event.target.type === "checkbox"
      ? event.target.checked
      : event.target.value;
  setFormState({
    ...formState,
    [name]: value,
  });
};

export default setFormChanges;
