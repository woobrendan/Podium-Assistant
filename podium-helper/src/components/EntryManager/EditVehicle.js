import InputContainer from "./InputContainer";

const EditVehicle = ({ entry, onInputChange }) => {
  return (
    <section className="input_vehicle">
      <InputContainer
        val={entry.classification}
        name="classification"
        onInputChange={onInputChange}
        label="Class"
      />
      <InputContainer
        val={entry.number}
        name="number"
        onInputChange={onInputChange}
        label="Number"
      />
      <InputContainer
        val={entry.vehicle}
        name="vehicle"
        onInputChange={onInputChange}
        label="Vehicle"
      />
    </section>
  );
};

export default EditVehicle;
