// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { CLIENT_URL } from "../Constants"; // similar to .env
// //what is a side effect in relation to useEffect
// import Pokemon from './Pokemon'
// function PokeList() {
//   const [pokemons, setPokemons] = useState([]); // we want to return names
//   // below will handle our side effect
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(CLIENT_URL); // Here we are sticking the pokeApi into our axios call
//         // try catch to catch errors
//         const { request } = response.data;
//         setPokemons(results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []); // we put an empty array

//   return (
//     <ul
//       className="container collection with-header"
//       style={{ marginTop: 25 }}
//       {pokemons.map((pokemon, index)=>{
//         const{name, url} = pokemon; // take name and url and equate to pokemon
//         return <Pokemon name{name} url = {url} key={index}/>
//       })}
//     ></ul>
//   )
// }

// export default PokeList

import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import { CLIENT_URL } from "../Constants";
function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CLIENT_URL);
        const { results } = response.data;
        setPokemons(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <ul className="container collection with-header" style={{ marginTop: 25 }}>
      {pokemons.map((pokemon, index) => {
        const { name, url } = pokemon;
        return <Pokemon name={name} url={url} key={index} />;
      })}
    </ul>
  );
}
export default PokeList;
