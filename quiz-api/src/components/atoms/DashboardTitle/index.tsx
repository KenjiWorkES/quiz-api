import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const DashboardTitle: React.FC = () => {
  return (
    <Box marginLeft={['0', '10']} marginTop="10">
      <Heading as="h1" size={['2xl', '4xl']}>
        Hello, Lucas
      </Heading>
      <Heading marginTop="5" as="h2" size="md" color="gray" fontWeight="normal">
        lucas.kenji@valtech.com
      </Heading>
    </Box>
  );
};

export default DashboardTitle;
