import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import useEvents from "../functions/useEvents";
//import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../store/events/eventActions";

const EventSearch = ({ component, getValue }) => {
    let { currentEventName } = useEvents();
    const [eventName, setEventName] = useState("");
    const [eventList, setEventList] = useState([]);
    const eventArr = useSelector((state) => state.events.eventsArr);
    const currentYearEvents = useSelector((state) => state.events.currentYear);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    useEffect(() => {
        component === "podium" ? setEventName(currentEventName) : setEventName("");
    }, [currentEventName]);

    useEffect(() => {
        const uniqueEvents = [
            ...new Set((component === "result" ? eventArr : currentYearEvents).map((event) => event.name)),
        ];
        setEventList(uniqueEvents);
    }, [eventArr, currentYearEvents]);

    const handleChange = (event) => {
        setEventName(event.target.value);
        getValue(event);
    };

    return (
        <Box data-testid="event_dropdown">
            <FormControl className="event_dropdown">
                <InputLabel>Events</InputLabel>
                <Select name="event" label="Events" value={eventName} onChange={(e) => handleChange(e)}>
                    {eventList.map((event, index) => (
                        <MenuItem key={index} value={event} data-testid={event}>
                            {event}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default EventSearch;
