import { forwardRef, Heading, HeadingProps } from "@chakra-ui/react";

interface NeonTextProps extends HeadingProps {
  children?: React.ReactNode;
}

const NeonText = forwardRef<NeonTextProps, "p">(
  ({ children, ...props }, ref) => (
    <Heading
      orientation="vertical"
      fontFamily="Pacifico"
      color="#67FFEC"
      textShadow="0px 0px 30px #0BFF4F"
      letterSpacing="0.3em"
      {...props}
      ref={ref}
    >
      {children}
    </Heading>
  ),
);

export default NeonText;
