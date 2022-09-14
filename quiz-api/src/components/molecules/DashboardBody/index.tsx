import React from 'react';
import { DashboardForm } from '@/components/atoms';
import { Box, Heading } from '@chakra-ui/react';
import { defaultTheme } from '@/themes';

const DashboardBody: React.FC = () => {
  return (
    <Box
      w="100vw"
      display="flex"
      justifyContent="center"
      textAlign={['center', 'left']}
    >
      <Box
        w={['100%', '50%']}
        maxW={['700px', 'none']}
        p={['10', '0']}
        color={defaultTheme.colors.default.black}
      >
        <Heading as="h3" mb="10">
          Change Password
        </Heading>
        <DashboardForm />
      </Box>
    </Box>
  );
};

export default DashboardBody;
