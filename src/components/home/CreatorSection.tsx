import { motion } from "framer-motion";
import creatorImage from "@/assets/creator-alusine.png";
import creatorImage2 from "@/assets/creator-alusine-2.jpeg";

const CreatorSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glow-card p-6 mt-6"
    >
      <h2 className="text-lg font-bold mb-4 gradient-text">Meet the Creator</h2>
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative flex gap-2"
        >
          <img
            src={creatorImage}
            alt="Alusine Gadrie Dumbuya"
            className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-lg shadow-primary/30"
          />
          <img
            src={creatorImage2}
            alt="Alusine Gadrie Dumbuya"
            className="w-16 h-16 rounded-full object-cover border-2 border-secondary shadow-lg shadow-secondary/30"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs">✓</span>
          </div>
        </motion.div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground">Alusine Gadrie Dumbuya</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Founder & Developer of Salone Health Connect. Passionate about bringing 
            accessible healthcare technology to Sierra Leone and empowering communities 
            through digital health solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default CreatorSection;
