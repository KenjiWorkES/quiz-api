import React from 'react';
import { DashboardForm } from '@/components/atoms';
import { Box, Heading } from '@chakra-ui/react';

const DashboardBody: React.FC = () => {
  return (
    <Box w="100vw" display="flex" justifyContent="center">
      <Box w="50%">
        <Heading as="h3" mb="10">
          Change Password
        </Heading>
        <DashboardForm />
      </Box>
    </Box>
  );
};

export default DashboardBody;
