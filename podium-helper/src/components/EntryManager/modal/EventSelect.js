import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchEvents } from "../../../store/events/eventActions";

const EventSelect = () => {
    const currentYearEvents = useSelector((state) => state.events.currentYear);
    const dispatch = useDispatch();

    return (
        <div id="class_dropdown">
            <label htmlFor="dropdown">Class:</label>
            <select value={className} onChange={handleChange} name="classification">
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
