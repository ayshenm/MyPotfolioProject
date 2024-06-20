import { Variants, motion, MotionProps } from "framer-motion";
import { FC, ReactNode, HTMLAttributes } from "react";

// HTMLAttributes'ten MotionProps'ta zaten olanları çıkartıyoruz
type DivProps = Omit<HTMLAttributes<HTMLDivElement>, keyof MotionProps>;

interface IProps extends DivProps, MotionProps {
  children: ReactNode;
  variants: Variants;
}

const Motion: FC<IProps> = ({ children, variants, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
