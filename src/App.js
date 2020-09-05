import React from 'react';
//import {Button} from '@material-ui/core';
import styles from './App.module.css';
import {Cards, Charts,CountryPicker} from './components';
import {fetchData} from './api';
import coronaImage from './images/corona.jpg';
class App extends React.Component{

   
   state={
      data:{},
      country:'',
   }
  async componentDidMount() {
     const fetchedData = await fetchData();
     this.setState({data:fetchedData});
  }
  handleCountryChange=async (count)=>{
   //fetch data
     const fetchedData = await fetchData(count);
   //set state
     if(count){
       this.setState({data:fetchedData,country:count});
      }
  }
  render(){
     const {data, country} = this.state;
  return (
     <div  className = {styles.container}>
        <img className={styles.image} src={coronaImage} alt = "COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      
     </div>

  );
  }
}

export default App;
