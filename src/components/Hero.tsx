import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ArrowLeft,
  ArrowRight,
  LayoutDashboard,
  Link2,
  Mic,
  RefreshCw,
  Share2,
  Volume2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      type: "intro",
      content: (
        <div className="h-full">
          <Card className="h-full overflow-hidden">
            <CardContent className="flex h-full items-center justify-center">
              <div className="flex flex-col items-start justify-center h-full">
                <h1 className="text-6xl ml-6">ARCADe</h1>
                <h1 className="p-3 text-3xl ml-5 pt-5 font-sans font-bold whitespace-nowrap">
                  Welcome to acrade
                </h1>
                <Button className="ml-6 p-6 bg-black text-lg">
                  Get started
                </Button>
              </div>
              <div className="">
                <img
                  className="border rounded-2xl overflow-hidden relative left-28 top-16 object-cover"
                  src="https://cdn.arcade.software/extension-uploads/995d41eb-1c00-451c-9206-1c0ec8144b64.png"
                  alt=""
                />
              </div>
            </CardContent>
            <BorderBeam
              className=""
              duration={8}
              size={100}
              transition="all 0.3s ease"
            />
          </Card>
        </div>
      ),
    },
    {
      type: "video",
      content: (
        <div className="p-1 h-[600px]">
          <Card className="h-full p-0">
            <CardContent className="flex items-center justify-center h-full overflow-hidden">
              <video
                className="w-full h-full overflow-hidden object-cover"
                autoPlay
                muted
                loop
                poster="/placeholder.svg?height=400&width=600"
              >
                <source
                  src="https://cdn.arcade.software/web-assets/edit.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      type: "image",
      content: (
        <div className="p-1 h-full">
          <Card className="h-full">
            <CardContent className="flex items-center justify-center p-6 h-full">
              <div className="w-full h-full flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Image Content</h3>
                <div className="relative w-full h-[calc(100%-3rem)] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.arcade.software/extension-uploads/995d41eb-1c00-451c-9206-1c0ec8144b64.png"
                    alt="Placeholder image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ]);

  const form = useForm({
    defaultValues: {
      title: "",
      imageUrl: "",
      description: "",
    },
  });

  const onSubmit = (values: {
    title: string;
    imageUrl: string;
    description: string;
  }) => {
    const newStep: TourStepType = {
      id: Date.now().toString(),
      ...values,
    };
    console.log("New step added:", newStep);
    // Create a new carousel item based on the tour step
    const newCarouselItem = {
      type: "tour-step",
      content: (
        <div className="p-1 h-full">
          <Card className="h-full overflow-hidden">
            <CardContent className="flex h-full items-center justify-center">
              <div className="flex flex-col items-start justify-center h-full">
                <h1 className="text-3xl ml-6 font-bold">{newStep.title}</h1>
                <p className="p-3 ml-5 pt-5 text-lg">{newStep.description}</p>
                <Button className="ml-6 p-6 bg-black text-lg">
                  Learn More
                </Button>
              </div>
              <div className="">
                <img
                  className="border rounded-2xl overflow-hidden relative left-28 top-16 object-cover"
                  src={newStep.imageUrl}
                  alt={newStep.title}
                />
              </div>
            </CardContent>
            <BorderBeam
              className=""
              duration={8}
              size={100}
              transition="all 0.3s ease"
            />
          </Card>
        </div>
      ),
    };

    // Add the new carousel item to the state
    setCarouselItems((prev) => [...prev, newCarouselItem]);
    form.reset();
    toast.success("New tour step added as a carousel item!");

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
          <div className="mt-44 flex border p-1 px-1 rounded-2xl items-center justify-center gap-4 border-gray-300 dark:border-white">
            <div className="relative overflow-hidden">
              <h1 className="md:text-lg text-sm font-light text-black dark:text-white">
                Announcing AI-powered content generation
              </h1>

              {/* Highlight Effect Layer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "120%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  opacity: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                style={{
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>

            <div className="rounded-3xl font-light p-1 px-3 text-sm md:text-sm border border-gray-300 dark:border-white">
              <h1>Learn more</h1>
            </div>
          </div>

          {/* Main heading */}
          <div>
            <h1 className="md:text-6xl text-3xl tracking-wide font-sans font-bold">
              Product demos that
            </h1>
            <div className="flex mt-2 items-center justify-center gap-4">
              <h1 className="md:text-6xl text-3xl tracking-wide font-sans font-bold">
                are't
              </h1>
              <TypewriterEffectSmooth
                className="text-3xl md:text-6xl md:text-blue-400 tracking-wide font-sans font-bold"
                words={[
                  { text: "boaring to watch" },
                  {
                    text: "painfull to make",
                  },
                ]}
              />
            </div>
          </div>

          {/* Sub heading */}
          <div className="flex items-center justify-center gap-2">
            <h1 className="md:text-2xl text-sm tracking-wide font-sans text-gray-400">
              Create interactive demos that convert — in minutes.
            </h1>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center gap-2">
            <Button className="p-6 text-xl">Install free extension</Button>
            <Button className="p-6 text-xl" variant="outline">
              Talk to sales
            </Button>
          </div>

          {/* Carousel Container */}
          <div className="border relative top-32 p-3 w-full rounded-3xl bg-white/20 backdrop-blur-sm border-white/50">
            <div className="border relative p-3 rounded-lg w-full h-full backdrop-filter backdrop-blur-xs bg-gray-500/0 overflow-hidden border-blue-950">
              <div className="flex items-center justify-between space-x-2">
                <div className="">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                    onClick={() => carouselApi.scrollPrev()}
                  >
                    <ArrowLeft className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                    onClick={() => carouselApi.scrollNext()}
                  >
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                    onClick={() => window.location.reload()}
                  >
                    <RefreshCw className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                  >
                    <Link2 className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                  >
                    <Share2 className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                  >
                    <Volume2 className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                  >
                    <Mic className="h-3 w-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6 rounded-full bg-gray-200 border-none"
                  >
                    <LayoutDashboard className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="relative w-full h-full">
                <Carousel setApi={carouselApi.setApi} className="w-full h-full">
                  <CarouselContent className="p-0">
                    {carouselItems.map((item, index) => (
                      <CarouselItem key={index} className="m-0">
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

          {/* Form to add new steps */}
          <div className="mb-16 mt-44 w-full flex items-center justify-center">
            <div className="bg-card rounded-xl p-4 w-xl border shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">
                Add New Carousel Item
              </h2>
              <p className="text-muted-foreground mb-3 text-sm font-light">
                Create a new carousel item for your product tour. It will appear
                as a new slide in the carousel.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
