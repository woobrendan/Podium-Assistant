import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchEvents } from "../../../store/events/eventActions";

const EventSelect = () => {
    const currentYearEvents = useSelector((state) => state.events.currentYear);
    const dispatch = useDispatch();
    const [eventName, setEventName] = useState("");

    useEffect(() => {
        dispatch(fetchEvents());
    }, [currentYearEvents]);

    return (
        <div id="class_dropdown">
            <label htmlFor="dropdown">Events:</label>
            <select value={eventName} onChange={handleChange} name="classification">
                {currentYearEvents.map((event, index) => (
                    <option value={event} key={index}>
                        {event}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default EventSelect;
