import InputContainer from "./InputContainer";

const EditDriver = ({ entry }) => {
  return (
    <section className="input_driver_1">
      <InputContainer
        val={entry.driver1.name}
        name="driver1.name"
        onInputChange={onInputChange}
        label="Driver 1"
      />
      <InputContainer
        val={entry.driver1.nationality}
        name="driver1.nationality"
        onInputChange={onInputChange}
        label="Nationality"
      />
      <InputContainer
        val={entry.driver1.raing}
        name="driver1.rating"
        onInputChange={onInputChange}
        label="FIA Rating"
      />
    </section>
  );
};

export default EditDriver;
