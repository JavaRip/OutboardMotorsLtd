import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer"

interface AnimatedBoxProps {
    children: React.ReactNode;
}

export default function AnimatedBox({ children }: AnimatedBoxProps) {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <Box
            ref={ref}
            className={inView ? 'animated' : ''}
            sx={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                '&.animated': ({
                    opacity: 1,
                    transform: 'translateY(0)',
                }),
            }}
        >
            {children}
        </Box>
    );
}
