import { motion, useScroll, useTransform } from 'motion/react';

import { useEffect, useRef, useState } from 'react';

import { Card, CardContent } from './ui/card';

const lines = [
  'Introducing our revolutionary product.',
  'Designed with performance and simplicity in mind.',
  'Built for developers and dreamers alike.',
  'Optimized for every screen and situation.',
  'Join us in shaping the future of technology.',
];
const TextPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto items-center justify-center m-2 ">
      <motion.div style={{ scale }} className="w-full py-20 ">
        <Card
          ref={ref}
          className="bg-white h-auto   w-full text-black py-12 px-8 rounded-2xl shadow-lg"
        >
          <CardContent>
            <div className="relative space-y-8 w-full h-full">
              {lines.map((line, index) => (
                <LineFade key={index} text={line} index={index} />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <div className="w-full mt-20 p-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium tracking-wide font-sans text-center">
          The fastest way to tell your story
        </h1>
        <p className="text-center font-light text-2xl text-gray-500 mt-4 max-w-2xl">
          Designed for scale, Arcade allows teams to build interactive demos without relying on
          technical or creative resources.
        </p>
      </div>
    </div>
  );
};
function LineFade({ text }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const dist = Math.abs(rect.top + rect.height / 2 - center);
      const newOpacity = Math.max(1 - dist / 200, 0.3);
      setOpacity(newOpacity);
    };

    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div ref={ref}>
      <p
        className="text-center text-2xl md:text-5xl tracking-wider transition-opacity duration-300"
        style={{ opacity }}
      >
        {text}
      </p>
    </div>
  );
}
export default TextPage;
