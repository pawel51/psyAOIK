import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const AgeArray = props => {

    const [{ageArray, size}, setAgeArray] = useState({ageArray: props.ageArray, size:props.ageArray.size});
    const [mean, setMean] = useState(props.ageArray.reduce((a,b) => {
        return parseFloat(a)+parseFloat(b)
    })/props.ageArray.length);


    useEffect(() => {
        /* Dodaje losowy int od 1 do 100 do tablicy ageArray */
        // function getNewArray(newArray){
        //     newArray.push((Math.random() * (100 - 1) + 1).toString())
        //     return newArray
        // }
        // const interval = setInterval((ageArray) => setAgeArray((ageArray) => getNewArray(ageArray)), 2000)
        let tempArray = [...ageArray]
        let filteredArray
        while(true){
            let newNum = (Math.round((Math.random() * (100 - 1) + 1)).toString())
            filteredArray = tempArray.filter((e) => e===newNum)
            if (filteredArray.length === 0){
                tempArray.push(newNum)
                break
            }
        }
        
        const interval = setInterval(() => setAgeArray({ageArray:tempArray, size:size+1}), 2000)


        return () => clearInterval(interval);
    }, )

    useEffect(() => {
        function getMean(){
            return Math.round((ageArray.reduce((a,b) => {
                return parseFloat(a)+parseFloat(b)
            })/ageArray.length))
        }
        const immediate = setImmediate(() => setMean(getMean()))
        return () => clearImmediate(immediate)
    },)

    return (
        <div>
            <span>{"["+ageArray.join(',')+"]"}</span>
            <br/>
            <span>{"Mean = "+mean}</span>
        </div>
    );
};

AgeArray.propTypes = {
    ageArray: PropTypes.arrayOf(PropTypes.string)
};

export default AgeArray;