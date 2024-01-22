const VehicleList = () => {
    return (
        <div id="class_dropdown">
            <label htmlFor="dropdown">Class:</label>
            <select value={className} onChange={handleChange} name="classification">
                {/*{getSeriesClasses(seriesList).map((classif, index) => (
                    <option value={classif} key={index}>
                        {classif}
                    </option>
                ))}*/}
            </select>
        </div>
    );
};

export default VehicleList;
