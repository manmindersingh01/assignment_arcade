import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  LayoutDashboard,
  Link2,
  Mic,
  RefreshCw,
  Share2,
  Volume2,
} from 'lucide-react';
import { toast } from 'sonner';

import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { BorderBeam } from '@/components/magicui/border-beam';
import { TypewriterEffectSmooth } from '@/components/typewriter-effect';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

interface TourStepType {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const useCarouselApi = () => {
  const [api, setApi] = React.useState<any>(null);

  return {
    api,
    setApi,
    scrollPrev: React.useCallback(() => api?.scrollPrev(), [api]),
    scrollNext: React.useCallback(() => api?.scrollNext(), [api]),
  };
};

const Index = () => {
  const carouselApi = useCarouselApi();
  const [carouselItems, setCarouselItems] = useState([
    {
      type: 'intro',
      content: (
        <div className="h-full w-full">
          <Card className="h-full overflow-hidden">
            <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between h-full p-4 md:p-8">
              <div className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl">ARCADe</h1>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Welcome to arcade</h1>
                <Button className="bg-black text-base md:text-lg px-6 py-3">Get started</Button>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  className="rounded-2xl object-contain w-52 md:w-72 lg:w-96"
                  src="https://cdn.arcade.software/extension-uploads/995d41eb-1c00-451c-9206-1c0ec8144b64.png"
                  alt="Arcade"
                />
              </div>
            </CardContent>
            <BorderBeam duration={8} size={100} transition="all 0.3s ease" />
          </Card>
        </div>
      ),
    },
    {
      type: 'video',
      content: (
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <Card className="h-full">
            <CardContent className="flex items-center justify-center h-full overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                poster="/placeholder.svg?height=400&width=600"
              >
                <source src="https://cdn.arcade.software/web-assets/edit.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      type: 'image',
      content: (
        <div className="h-full w-full">
          <Card className="h-full">
            <CardContent className="flex flex-col items-center justify-center p-4 md:p-6 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">Image Content</h3>
              <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://cdn.arcade.software/extension-uploads/995d41eb-1c00-451c-9206-1c0ec8144b64.png"
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]);

  const form = useForm({
    defaultValues: {
      title: '',
      imageUrl: '',
      description: '',
    },
  });

  const onSubmit = (values: { title: string; imageUrl: string; description: string }) => {
    const newStep: TourStepType = {
      id: Date.now().toString(),
      ...values,
    };
    console.log('New step added:', newStep);
    // Create a new carousel item based on the tour step
    const newCarouselItem = {
      type: 'tour-step',
      content: (
        <div className="p-1 h-full">
          <Card className="h-full overflow-hidden">
            <CardContent className="flex h-full items-center justify-center">
              <div className="flex flex-col items-start justify-center h-full">
                <h1 className="text-3xl ml-6 font-bold">{newStep.title}</h1>
                <p className="p-3 ml-5 pt-5 text-lg">{newStep.description}</p>
                <Button className="ml-6 p-6 bg-black text-lg">Learn More</Button>
              </div>
              <div className="">
                <img
                  className="border rounded-2xl overflow-hidden relative left-28 top-16 object-cover"
                  src={newStep.imageUrl}
                  alt={newStep.title}
                />
              </div>
            </CardContent>
            <BorderBeam className="" duration={8} size={100} transition="all 0.3s ease" />
          </Card>
        </div>
      ),
    };

    // Add the new carousel item to the state
    setCarouselItems((prev) => [...prev, newCarouselItem]);
    form.reset();
    toast.success('New tour step added as a carousel item!');

    // Scroll to the new item after a brief delay to allow rendering
    setTimeout(() => {
      carouselApi.api?.scrollTo(carouselItems.length);
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      carouselApi.api?.scrollTo(carouselItems.length);
    }, 100);
  }, [carouselItems.length, carouselApi.api]);

  return (
    <div className="w-full h-full p-2 font-sans">
      <div className="w-full z-10 h-fit bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.9),_transparent_70%)] rounded-lg">
        <div className="max-w-5xl h-auto p-8 mx-auto flex items-start justify-center flex-col space-y-6">
          {/* Heading line */}
          <div className="md:mt-44 mt-20 flex border p-1 px-1 rounded-2xl items-center justify-center gap-4 border-gray-300 dark:border-white">
            <div className="relative overflow-hidden">
              <h1 className="md:text-lg text-xs text-center font-light whitespace-nowrap text-black dark:text-white">
                Announcing AI-powered content generation
              </h1>

              {/* Highlight Effect Layer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '120%', opacity: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                style={{
                  mixBlendMode: 'screen',
                  pointerEvents: 'none',
                  backgroundSize: '200% 100%',
                }}
              />
            </div>

            <div className="rounded-3xl font-light p-1 px-3 md:text-sm text-xs whitespace-nowrap border border-gray-300 dark:border-white">
              <h1>Learn more</h1>
            </div>
          </div>

          {/* Main heading */}
          <div>
            <h1 className="md:text-6xl text-[1rem] tracking-wide font-sans font-bold">
              Product demos that
            </h1>
            <div className="flex md:mt-2 mt-0 items-center justify-center gap-1">
              <h1 className="md:text-6xl text-[1rem] m-0 tracking-wide font-sans font-bold">
                are't
              </h1>
              <TypewriterEffectSmooth
                className="text-[1rem] md:text-6xl md:text-blue-400 tracking-wide font-sans font-bold"
                words={[
                  { text: 'boaring to watch' },
                  {
                    text: 'painfull to make',
                  },
                ]}
              />
            </div>
          </div>

          {/* Sub heading */}
          <div className="flex items-center justify-center gap-2">
            <h1 className="md:text-2xl text-xs tracking-wide font-sans text-gray-400">
              Create interactive demos that convert — in minutes.
            </h1>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center gap-2">
            <Button className="md:p-6 p-2 md:text-xl ">Install free extension</Button>
            <Button className="md:p-6 p-2 md:text-xl" variant="outline">
              Talk to sales
            </Button>
          </div>

        
          <div className="border relative top-20 md:top-32 p-3 w-full h-[28rem] md:h-[32rem] lg:h-[36rem] rounded-3xl bg-white/20 backdrop-blur-sm border-white/50">
            <div className="border relative p-3 rounded-lg w-full h-full backdrop-filter backdrop-blur-xs bg-gray-500/0 overflow-hidden border-blue-950">
  
              <div className="flex flex-wrap items-center justify-between gap-4">
          
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 md:h-6 md:w-6 rounded-full bg-gray-200 border-none"
                    onClick={() => carouselApi.scrollPrev()}
                  >
                    <ArrowLeft className="h-4 w-4 md:h-3 md:w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 md:h-6 md:w-6 rounded-full bg-gray-200 border-none"
                    onClick={() => carouselApi.scrollNext()}
                  >
                    <ArrowRight className="h-4 w-4 md:h-3 md:w-3" />
                  </Button>

          
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="md:text-sm tracking-tighter text-[10px] md:px-3 px-1 py-0.5"
                      >
                        Add New Step
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90vw] max-w-2xl">
                      <div className="bg-card rounded-xl p-4">
                        <h2 className="text-xl font-semibold mb-3">Add New Carousel Item</h2>
                        <p className="text-muted-foreground mb-3 text-sm font-light">
                          Create a new carousel item for your product tour. It will appear as a new
                          slide in the carousel.
                        </p>

                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                              control={form.control}
                              name="title"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Step Title</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter step title" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="imageUrl"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Image URL</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Enter image URL" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Description</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Enter step description"
                                      rows={3}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="flex justify-end">
                              <Button type="submit">Add New Carousel Item</Button>
                            </div>
                          </form>
                        </Form>
                      </div>
                    </DialogContent>
                  </Dialog>


                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 md:h-6 md:w-6 rounded-full bg-gray-200 border-none"
                    onClick={() => window.location.reload()}
                  >
                    <RefreshCw className="h-4 w-4 md:h-3 md:w-3" />
                  </Button>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                  {[Link2, Share2, Volume2, Mic, LayoutDashboard].map((Icon, i) => (
                    <Button
                      key={i}
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 md:h-6 md:w-6 rounded-full bg-gray-200 border-none"
                    >
                      <Icon className="h-4 w-4 md:h-3 md:w-3" />
                    </Button>
                  ))}
                </div>
              </div>


              <div className="relative w-full h-full mt-4">
                <Carousel setApi={carouselApi.setApi} className="w-full h-full">
                  <CarouselContent className="p-0 h-full">
                    {carouselItems.map((item, index) => (
                      <CarouselItem
                        key={index}
                        className="m-0 h-full flex items-center justify-center"
                      >
                        {item.content}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute z-20 left-0 top-1/2 transform -translate-y-1/2 h-8 w-8" />
                  <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-8" />
                </Carousel>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Index;
