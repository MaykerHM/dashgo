import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mayker Miyanaga</Text>
          <Text color="gray.300" fontSize="small">
            hydeki8@gmail.com
      </Text>
        </Box>
      ) }
      <Avatar size="md" name="Mayker Miyanaga" src="https://github.com/MaykerHM.png" />
    </Flex>
  )
}