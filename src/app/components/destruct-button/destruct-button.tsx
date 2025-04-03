'use client';

import { useState, useEffect } from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';
import {DESTRUCTION_MESSAGES} from "@/app/utils/constants/constants";

export const DestructButton = () => {
    const [countdown, setCountdown] = useState<number | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (countdown === null) return;

        if (countdown === 0) {
            setMessage(DESTRUCTION_MESSAGES.FINAL_MESSAGE);
            setCountdown(null);
            return;
        }

        const timer = setTimeout(() => {
            setCountdown((prev) => (prev ?? 0) - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);

    return (
        <VStack spacing={4} mt={10}>
            {countdown === null && !message && (
                <Button
                    bg="red.500"
                    textColor="white"
                    onClick={() => setCountdown(5)}
                >
                    {DESTRUCTION_MESSAGES.ACTIVATION_BUTTON}
                </Button>
            )}

            {countdown !== null && (
                <Text fontSize="xl" fontWeight="bold">
                    {DESTRUCTION_MESSAGES.PROCESSING_MESSAGE} {countdown}
                </Text>
            )}

            {message && (
                <Text
                    fontSize="lg"
                    color="green.500"
                    fontWeight="semibold"
                    textAlign="center"
                >
                    {message}
                </Text>
            )}
        </VStack>
    );
};
