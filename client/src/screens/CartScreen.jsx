import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Link,
  useColorModeValue as mode,
  Spinner,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Wrap,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import CartOrderSummary from '../components/CartOrderSummary';

const CartScreen = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { loading, error, cart } = cartInfo;
  return (
    <Wrap
      spacing='30px'
      justify='center'
      minHeight='100vh'>
      {loading ? (
        <Stack
          direction='row'
          spacing={4}>
          <Spinner
            mt={20}
            thickness='2px'
            speed='0.65s'
            emptyColor='gray.200'
            color='orange.500'
            size='xl'
          />
        </Stack>
      ) : error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>We're Sorry!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>Your Cart is empty.</AlertTitle>
          <AlertDescription>
            <Link
              as={ReactLink}
              to='/products'>
              Click here to see our products.
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: '3x1', lg: '7x1' }}
          mx='auto'
          px={{ base: '4', md: '8', lg: '12' }}
          py={{ base: '6', md: '8', lg: '12' }}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}>
            <Stack
              spacing={{ base: '8', md: '10' }}
              flex='2'>
              <Heading
                fontSize='2x1'
                fontWeight='extrabold'>
                Shopping Cart
              </Heading>
              <Stack spacing='6'>
                {cart.map((cartItem) => {
                  return (
                    <CartItem
                      key={cartItem.id}
                      cartItem={cartItem}
                    />
                  );
                })}
              </Stack>
            </Stack>
            <Flex
              direction='column'
              align='center'
              flex='1'>
              <CartOrderSummary />
              <HStack
                mt='6'
                fontWeight='semibold'>
                <p>or</p>
                <Link
                  as={ReactLink}
                  to='/products'
                  color={mode('orange.500', 'orange.200')}>
                  Continue Shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartScreen;
