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
        <div className="flex gap-2 justify-between items-center">
            <Card className='h-3/5 w-3/5 bg-red-600' >
                <CardHeader>
                <Heading size='md'>Nivel de ph</Heading>
                </CardHeader>
                <CardBody>
                <Text className='text-center'>7</Text>
                </CardBody>
                <CardFooter className='flex justify-center'>
                    <Button>Ver grafico</Button>
                </CardFooter>
            </Card>
            <Card className='h-3/5 w-3/5'>
                <CardHeader>
                <Heading size='md'>Nivel de turbiedad</Heading>
                </CardHeader>
                <CardBody>
                <Text className='text-center'>12%</Text>
                </CardBody>
                <CardFooter className='flex justify-center'>
                    <Button>Ver grafico</Button>
                </CardFooter>
            </Card>
        </div>
  );
};

export default Metrics;
