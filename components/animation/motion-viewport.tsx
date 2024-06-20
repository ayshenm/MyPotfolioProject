import { Variants, motion, MotionProps } from "framer-motion";
import { FC, ReactNode, HTMLAttributes } from "react";

// HTMLAttributes'ten MotionProps'ta zaten olanları çıkartıyoruz
type DivProps = Omit<HTMLAttributes<HTMLDivElement>, keyof MotionProps>;

interface IProps extends DivProps, MotionProps {
  children: ReactNode;
  variants: Variants;
}

const MotionViewport: FC<IProps> = ({ children, variants, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={variants}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionViewport;
