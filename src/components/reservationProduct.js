import React from "react";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import ReservationList from "./ReservationList";


function TabPanel({index,value,reserved}){

return (
index === value && (<ReservationList reserved={reserved}/>)
)

}

 function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const ReservationProduct = () => {

 
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    
  return (
    <>
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Reservation" {...a11yProps(0)} />
          <Tab label="Reservation Précédent" {...a11yProps(1)} />
        </Tabs>
      </div>
      <TabPanel reserved={false} value={value} index={0}/>
       
      <TabPanel reserved={true} value={value} index={1}/>
      
    </>
  );
};

export default ReservationProduct;
