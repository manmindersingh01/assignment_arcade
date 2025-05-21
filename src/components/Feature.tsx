import React from "react";
import { motion } from "motion/react";
import {
  Rocket,
  Cloud,
  Briefcase,
  Globe,
  Heart,
  Star,
  Camera,
  Code,
  Layers,
  Shield,
} from "lucide-react";
const Feature = () => {
  const companies = [
    { name: "RocketCorp", icon: Rocket },
    { name: "Cloudify", icon: Cloud },
    { name: "BizSuite", icon: Briefcase },
    { name: "GlobalNet", icon: Globe },
    { name: "Heartify", icon: Heart },
    { name: "StarTech", icon: Star },
    { name: "SnapCam", icon: Camera },
    { name: "CodeBase", icon: Code },
    { name: "Layered", icon: Layers },
    { name: "Shielded", icon: Shield },
    { name: "RocketCorp", icon: Rocket },
    { name: "Cloudify", icon: Cloud },
    { name: "BizSuite", icon: Briefcase },
    { name: "GlobalNet", icon: Globe },
    { name: "Heartify", icon: Heart },
    { name: "StarTech", icon: Star },
    { name: "SnapCam", icon: Camera },
    { name: "CodeBase", icon: Code },
    { name: "Layered", icon: Layers },
    { name: "Shielded", icon: Shield },
  ];
  return (
    <div className="mt-20 w-full">
      <div className="w-full text-gray-500 p-2 flex items-center justify-center">
        More than 15k companies choose Arcade to tell better product stories
      </div>
      {/* Anmiantion vcompany logos */}
      <div className=" overflow-hidden whitespace-nowrap p-4">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center justify-start gap-10"
        >
          {companies.map(({ name, icon: Icon }) => (
            <div key={name} className="flex items-center gap-2 p-8 min-w-max">
              <Icon size={28} className="text-gray-700" />
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col  items-center justify-center gap-5 mt-10 p-5">
        <h1 className="font-sans text-5xl font-bold bg-gradient-to-r from-black from-90% to-balck/70  bg-clip-text text-transparent tracking-wider">
          Demos for the whole team.
        </h1>
        <h2 className="text-gray-400 text-2xl text-center font-light">
          Arcade makes building, collaborating, <br /> and scaling seamless, no
          matter your team size.
        </h2>
      </div>
    </div>
  );
};

export default Feature;
