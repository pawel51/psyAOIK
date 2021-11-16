import React from 'react';
import zalogaData from "./zalogaData";
import PersonInCrew from "./PersonInCrew";
import AgeArray from "./AgeArray";
import {Table} from "react-bootstrap";

const App = (props) => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>imie</th>
                        <th>nazwisko</th>
                        <th>wiek</th>
                        <th>stopien</th>
                        <th>e-mail</th>
                    </tr>
                </thead>

                <tbody>{zalogaData.map((person, key) => {
                    return (
                        <PersonInCrew key={key}
                                      imie={person.imie}
                                      nazwisko={person.nazwisko}
                                      wiek={person.wiek}
                                      stopien={person.stopien}
                                      adresemail={person.adres}
                        />
                    )
                })}
                </tbody>

            </Table>
            <AgeArray key={"ageArray0"} ageArray={zalogaData.map(person => {
                return person.wiek.toString()
            })}/>
        </div>

    )
}

export default App;