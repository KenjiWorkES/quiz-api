import React from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const DashboardForm: React.FC = () => {
  return (
    <Box as="form">
      <FormControl mb="5">
        <FormLabel>Old Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <FormControl mb="5">
        <FormLabel>New Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="purple">Change Password</Button>
    </Box>
  );
};

export default DashboardForm;
