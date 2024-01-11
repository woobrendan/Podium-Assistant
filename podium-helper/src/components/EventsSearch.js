import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import useEvents from "../functions/useEvents";
import axios from "axios";

const EventSearch = ({ component, getValue }) => {
    let { events, currentEventName } = useEvents();
    const [eventName, setEventName] = useState("");
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        component === "podium" ? setEventName(currentEventName) : setEventName("");
    }, [currentEventName]);

    useEffect(() => {
        if (component !== "podium") {
            getEvents();
        }
    }, []);

    const getEvents = async () => {
        try {
            const date = new Date();
            const year = date.getFullYear();
            let yearString = `http://localhost:2020/api/events`;

            if (component === "podium") {
                yearString += `/${year}`;
            }

            const data = await axios.get(yearString);
            const eventArr = data.data.events;

            const uniqueEvents = [...new Set(eventArr.map((event) => event.name))];

            //            console.log("unique", uniqueEvents);
            //
            //            const uniqueObjects = [];
            //            const tempObject = {};
            //
            //            eventArr.forEach((event) => {
            //                const name = event.name;
            //                if (!tempObject[name]) {
            //                    tempObject[name] = true;
            //                    uniqueObjects.push(event);
            //                }
            //            });

            setEventList(uniqueEvents);
            //setEventList(uniqueObjects);
        } catch (err) {
            console.log("Error fetching events: ", err);
        }
    };

    const handleChange = (event) => {
        setEventName(event.target.value);
        getValue(event);
    };

    return (
        <Box data-testid="event_dropdown">
            <FormControl className="event_dropdown">
                <InputLabel>Events</InputLabel>
                <Select name="event" label="Events" value={eventName} onChange={(e) => handleChange(e)}>
                    {(component === "podium" ? events : eventList).map((event, index) => (
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
