/* eslint react/prop-types: 0 */


import styles from './CountryList.module.css'
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';

function CountryList() {
    const {cities, isLoading} = useCities();

    if(isLoading)return <Spinner/>

    if(!cities.length) return <Message message="Add your first city by clicking a city on the map"/>
    const countries = cities.reduce((arr, city) =>{
        if(!arr.map(el => el.city).includes(city.country))
            return [...arr, {country:city.country, key:city.id, emoji:city.emoji}];
        else return arr;
    }, []);
    // const countries = cities
    // .reduce((unique, city) => {
    //     if (!unique.includes(city.country)) {
    //         return [...unique, city.country];
    //     }
    //     return unique;
    // }, [])
    // .map(country => {
    //     const city = cities.find(city => city.country === country);
    //     return { country: country, key: city.id, emoji: city.emoji };
    // });
    return (
        <ul className={styles.countryList}>
            {countries.map((country)=>
                <CountryItem country={country} key={country.key}/>
            )}
        </ul>
    )
}

export default CountryList;
