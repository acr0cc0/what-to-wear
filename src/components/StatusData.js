import React from "react"

export const StatusData = ({status}) => {
    let statusMessage = '';

    switch (status) {
        default:
            statusMessage = '';
            break;
        case 'fetching':
            statusMessage = 'fetching weather data';
            break;
        case 'unable':
            statusMessage = 'unable to retrieve location';
            break;
        case 'unsupported':
            statusMessage = 'location blocked or not supported';
            break;
    }

    return (
        <h3 className="status-message">{statusMessage}</h3>
    );
}