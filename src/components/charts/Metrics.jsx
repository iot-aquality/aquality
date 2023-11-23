import React from 'react';
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const Metrics = () => {
  return (
        <div className="flex gap-2 justify-evenly items-center">
            <Card className='h-3/5 w-2/5' bgColor={'#f59e0b'} >
                <CardHeader>
                <Heading size='lg' className='text-white text-center'>Nivel de ph</Heading>
                </CardHeader>
                <CardBody className='bg-amber-500'>
                <Text className='text-center text-white font-bold text-4xl'>7</Text>
                </CardBody>
            </Card>
            <Card className='h-3/5 w-2/5' bg={'#06b6d4'}>
                <CardHeader>
                <Heading size='lg'  className='text-white text-center'>Nivel de turbiedad</Heading>
                </CardHeader>
                <CardBody>
                <Text className='text-center text-white font-bold text-4xl'>12%</Text>
                </CardBody>
            </Card>
        </div>
  );
};

export default Metrics;
