import React, { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  const [value, onChange] = useState(new Date());

  const formattedDate = format(value, 'MMMM dd, yyyy');

  const handleDateSelect = async () => {
    try {

        const timestamp = value.getTime();

        const startTs = timestamp;
        const endTs = timestamp + 86400000; 

        console.log('startTs: ' + startTs + ' endTs: ' + endTs);

    } catch (error) {
        console.error('Error al obtener datos del sensor:', error);
    }
  };

  useEffect(() => {
    
    handleDateSelect();

  }, [value])

  return (
    <Box p={4}>

      <Heading as="h2" size="md" mb={2}>
        {formattedDate}
      </Heading>
      <CalendarComponent onChange={onChange} value={value} />
    </Box>
  );
}

export default Calendar;
