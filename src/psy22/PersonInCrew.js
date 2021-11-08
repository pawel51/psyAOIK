import React from 'react';
import PropTypes from 'prop-types';

const PersonInCrew = props => {
    const {imie, nazwisko, wiek, stopien, adresemail} = props;
    return (
        <tr>
            <td>{imie}</td>
            <td>{nazwisko}</td>
            <td>{wiek}{(()=>{
                if (wiek.slice(-1,wiek.length) >=2 && wiek.slice(-1,wiek.length))
                    return <span>lata</span>
                else if (wiek === "1")
                    return <span>rok</span>
                else
                    return <span>lat</span>
            })()}
            </td>
            <td>{stopien}</td>
            <td>{adresemail}</td>
        </tr>
    );
};

PersonInCrew.propTypes = {
    imie: PropTypes.string,
    nazwisko: PropTypes.string,
    wiek: PropTypes.string,
    stopien: PropTypes.string,
    adresemail: PropTypes.string

};

export default PersonInCrew;