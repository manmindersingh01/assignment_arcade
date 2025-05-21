import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const Integrations = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <div className="p-4">
      <motion.div
        style={{ scale }}
        className="min-h-screen rounded-lg w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#000000] via-[#5d1042]  to-[#000000]"
      >
        <div className="container px-4 py-10 mx-auto text-center">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-sans font-medium mb-6 bg-gradient-to-tr from-[#eeeeee] from-50% to-[#000000] bg-clip-text text-transparent">
              Integrated with the <br />
              tools you rely on.
            </h1>
            <p className="text-xl md:text-xl font-light font-sans text-gray-300 mb-10">
              Gather deep insights, drive action, and get more done with native
              integrations
            </p>
            <Button className="bg-white hover:bg-gray-100 text-black px-8 py-6 rounded-md text-lg font-medium">
              Explore all integrations
            </Button>
          </div>

          {/* Integration Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4 max-w-6xl mx-auto">
            {integrationLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-zinc-800 border border-zinc-500 p-4 rounded-xl flex items-center justify-center h-24 w-24 mx-auto"
              >
                {logo.icon ? (
                  <logo.icon
                    className="h-12 w-12"
                    style={{ color: logo.color }}
                  />
                ) : (
                  <img
                    src={logo.imageSrc}
                    alt={logo.name}
                    className="h-12 w-12 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Mock integration logos data
const integrationLogos = [
  {
    name: "Slack",
    color: "#4A154B",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-slack-logo-1481820-1254330.png",
  },
  {
    name: "Figma",
    color: "#F24E1E",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-figma-3521426-2944870.png",
  },
  {
    name: "Jira",
    color: "#0052CC",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-jira-3628861-3030001.png",
  },
  {
    name: "HubSpot",
    color: "#FF7A59",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-hubspot-4481070-3712864.png",
  },
  {
    name: "Salesforce",
    icon: ShieldAlert,
    color: "#00A1E0",
  },
  {
    name: "Asana",
    color: "#FC636B",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-asana-226537.png",
  },
  {
    name: "ProductBoard",
    color: "#FF3366",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-product-management-2-1174740.png",
  },
  {
    name: "Segment",
    color: "#29C499",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-segment-3772062-3150713.png",
  },
  {
    name: "Intercom",
    color: "#286EFA",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-intercom-3629127-3030267.png",
  },
  {
    name: "Linear",
    color: "#5E6AD2",
    imageSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-linear-1615764-1370386.png",
  },
];

export default Integrations;
