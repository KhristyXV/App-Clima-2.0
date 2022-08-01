
import React, { useState } from 'react'; //Se agregó el { useState }
import Card from './components/Card';
import Cards from './components/Cards.jsx';
import style from './App.module.css';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Moreinfo from './components/Moreinfo';
import { Helmet } from 'react-helmet';

function App() {
  const [cities, setState] = React.useState([])

  function onClose(id) {
    setState(oldCities => oldCities.filter(c => c.id != id));
  }


  function onSearch(ciudad) {
      const apiKey =`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=d16cfa3761a3f928659d7238d3e73270&units=metric`;

    fetch(apiKey)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          const yaesta = cities.find((c) => c.id === ciudad.id);
          if(!yaesta) {
            setState((oldCities) => {
              return [...oldCities, ciudad];
          });
         }
        } else { 
         alert(`${ciudad} no encontrada`) 
        }
      });

    }

    function onClose(id) {
      setState(oldCities => oldCities.filter(c => c.id != id));
    }

    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
        return ciudad[0];
      } else {
        return null;
      }
    }

  return ( 
 <BrowserRouter>
  <Helmet>
      <meta charSet='utf-8'/>
      <title>App Clima 2.0</title>
      <link rel='canonical' href=''/>
  </Helmet>  

  <Route exact path='/'>   <Menu/>   </Route>

  
  <Route path='/clima'>

  <div className={style.app}>


   <Nav onSearch={onSearch}/> 
  

    <main className={style.main}>

      <section className={style.mainCity}>
    
        {cities.length ? (
          
        <Card //Aqui lo que hacemos es renderizar Card, y agregandole ciertas propiedades (max,min,name)                 
          
          max={cities[cities.length - 1].max} 
          min={cities[cities.length - 1].min}
          name={cities[cities.length - 1].name}
          img={cities[cities.length - 1].img}
          main={true}
        />
        ) : (<span className={style.notCityMain}>No hay ciudades</span>)}
        
      </section>  
    
      <section className={style.citiesTown}>

        <Cards
          cities={cities} onClose = {onClose} //Con State conecto cities a el hook, con el hook conecto a la API
        />

      </section>
      
    </main>
    
  </div>
  
  </Route>  
  
  <Route path='/ciudad/:ciudadId'
  render={({match}) =>  <Moreinfo city={onFilter(match.params.ciudadId)}/>}
  >
      
  </Route>

  
  </BrowserRouter>
  );
}

export default App;
