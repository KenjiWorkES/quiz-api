import React from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const DashboardForm: React.FC = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Old Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <FormControl>
        <FormLabel>New Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="purple"></Button>
    </Box>
  );
};

export default DashboardForm;
