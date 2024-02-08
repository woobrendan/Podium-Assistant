const HardChargeContainer = () => {
    return (
        <div className="hard_charge_container">
            <div className="hard_driver">
                <label>Driver:</label>
                <select name="hard_drivers">{/*// loop through entries*/}</select>
            </div>
            <div className="hard_start">
                <label>Start Pos:</label>
                <input type="text" />
            </div>
            <div className="hard_gain">
                <label>Gain:</label>
                <select name="hard_drivers">{/*// loop through entries*/}</select>
            </div>
        </div>
    );
};

export default HardChargeContainer;
