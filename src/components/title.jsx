import { motion } from "framer-motion";

const TicTacToeTitle = () => {
  

  return (
    
      <h1 className="mt-6 mb-4 font-bold text-2xl flex sm:text-5xl sm:mb-12 ">
        <motion.div 
        className=" text-orange-500" 
        initial={{y:-180}} 
        animate={{y:0}} 
        transition={{ ease: "easeInOut", duration: 0.5 }} >
            Tic
        </motion.div>
        <motion.div 
        className=" text-yellow-500"
        initial={{y:-180}} 
        animate={{y:0}} 
        transition={{ ease: "easeInOut", duration: 0.5, delay:0.5 }}
        >
          Tac
        </motion.div>
        <motion.div className=" text-orange-500"
        initial={{y:-180}} 
        animate={{y:0}} 
        transition={{ ease: "easeInOut", duration: 0.5, delay:1 }}
         >
          Toe
        </motion.div>
      </h1>
   
  );
};

export default TicTacToeTitle;