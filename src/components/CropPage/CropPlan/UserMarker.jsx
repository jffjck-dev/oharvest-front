import React from 'react';
import { useState } from 'react';
import { Marker, useMapEvents, Tooltip, Popup } from 'react-leaflet';

const UserMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(event) {
            setPosition(event.latlng);
            map.flyTo(event.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Tooltip>Vous êtes içi 🙋‍♂️</Tooltip>
            <Popup>click on the map to update your position</Popup>
        </Marker>
    );
};

export default UserMarker;