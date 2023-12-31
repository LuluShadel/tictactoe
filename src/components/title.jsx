import { motion } from "framer-motion";

const TicTacToeTitle = () => {
  

  return (
    
      <h1 className="mt-6 font-bold flex text-3xl">
        <motion.div 
        className=" text-orange-500" 
        initial={{y:-150}} 
        animate={{y:0}} 
        transition={{ ease: "easeInOut", duration: 0.5 }} >
            Tic
        </motion.div>
        <motion.div 
        className=" text-yellow-500"
        initial={{y:-150}} 
        animate={{y:0}} 
        transition={{ ease: "easeInOut", duration: 0.5, delay:0.5 }}
        >
          Tac
        </motion.div>
        <motion.div className=" text-orange-500"
        initial={{y:-150}} 
        animate={{y:0}} 
        transition={{ ease: "easeInOut", duration: 0.5, delay:1 }}
         >
          Toe
        </motion.div>
      </h1>
   
  );
};

export default TicTacToeTitle;