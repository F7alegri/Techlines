import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  useColorModeValue as mode,
  Text,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { GiTechnoHeart } from 'react-icons/gi';

const LandingScreen = () => {
  return (
    <Box
      maxW='8xl'
      mx='auto'
      px={{ base: '0', lg: '12' }}
      py={{ base: '0', lg: '12' }}
      minH='6xl'>
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '0', lg: '20' }}>
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: mode('orange.50', 'gray.700'), lg: 'transparent' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}>
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Flex alignItems='center'>
                <Icon
                  as={GiTechnoHeart}
                  h={12}
                  w={12}
                  color={mode('orange.500', 'orange.300')}
                />
                <Text
                  fontSize='4xl'
                  fontWeight='bold'
                  color={mode('orange.500', 'orange.300')}>
                  Techlines
                </Text>
              </Flex>
              <Heading
                size='xl'
                fontWeight='normal'>
                Update your equipment
              </Heading>
            </Stack>
            <HStack spacing='3'>
              <Link
                color={mode('orange.500', 'orange.300')}
                fontWeight='bold'
                fontSize='lg'
                as={ReactLink}
                to={'/products'}>
                Browse our products
              </Link>
              <Icon
                color={mode('orange.500', 'orange.300')}
                as={FaArrowRight}
              />
            </HStack>
          </Stack>
        </Box>
        <Flex
          flex='1'
          overflow='hidden'>
          <Image
            src='images/landing.jpg'
            alt='Man with new smartwatch'
            display={mode('initial', 'none')}
            fallback={<Skeleton />}
            maxHeight='550px'
            minW='300px'
            objectFit='cover'
            flex='1'
          />
          <Image
            display={mode('none', 'initial')}
            src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='Laptop on top of a chair'
            fallback={<Skeleton />}
            maxHeight='550px'
            minW='300px'
            objectFit='cover'
            flex='1'
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default LandingScreen;
