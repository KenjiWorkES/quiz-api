import React from 'react';
import { DashboardForm } from '@/components/atoms';
import { Box, Heading } from '@chakra-ui/react';

const DashboardBody: React.FC = () => {
  return (
    <Box
      w="100vw"
      display="flex"
      justifyContent="center"
      textAlign={['center', 'left']}
    >
      <Box w={['100%', '50%']} p={['10', '0']}>
        <Heading as="h3" mb="10">
          Change Password
        </Heading>
        <DashboardForm />
      </Box>
    </Box>
  );
};

export default DashboardBody;
