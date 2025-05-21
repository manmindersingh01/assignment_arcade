import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpSquare } from "lucide-react";

export function TabsDemo() {
  return (
    <div className="max-w-5xl mx-auto my-20">
      <Tabs defaultValue="Marketing" className="hidden md:block">
        <TabsList className="grid w-full h-auto  grid-cols-5">
          <TabsTrigger className="p-3" value="Marketing">
            Marketing
          </TabsTrigger>
          <TabsTrigger className="p-3" value="Product">
            Product
          </TabsTrigger>
          <TabsTrigger className="p-3" value="sales">
            Sales / pre-sales
          </TabsTrigger>
          <TabsTrigger className="p-3" value="customer success">
            Customer success
          </TabsTrigger>
          <TabsTrigger className="p-3" value="training">
            Enablement and training
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Marketing">
          <Card className="w-full h-auto p-0 border-none shadow-none overflow-hidden">
            <CardContent className=" h-full flex p-0 w-full ">
              <div className="h-full mt-20 w-1/2 p-4 flex flex-col items-start justify-center">
                <h1 className="text-6xl font-sans">
                  Arcade <br /> for marketing
                </h1>
                <p className="text-gray-400 text-xl font-light">
                  Build compelling, on-brand demos in minutes to drive leads,
                  boost product adoption, and more effectively tell your
                  product's story.
                </p>
                <div className=" w-full grid grid-cols-2 grid-rows-2 gap-4">
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Chapters
                  </div>
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Call-to-action buttons
                  </div>
                  <div className="  gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Export to GIF/Video
                  </div>
                  <div className="gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    White-labeled Arcades
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2 rounded-lg overflow-hidden ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://cdn.arcade.software/web-assets/brand.mp4"
                ></video>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Product">
          <Card className="w-full h-auto p-0 border-none shadow-none overflow-hidden">
            <CardContent className=" h-full flex p-0 w-full ">
              <div className="h-full mt-20 w-1/2 p-4 flex flex-col items-start justify-center">
                <h1 className="text-6xl font-sans">
                  Arcade <br /> for product
                </h1>
                <p className="text-gray-400 text-xl font-light">
                  Demos built for fast-paced product teams looking to drive
                  adoption, gather feedback quickly, and iterate on concepts.
                </p>
                <div className=" w-full grid grid-cols-2 grid-rows-2 gap-4">
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Chapters
                  </div>
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Call-to-action buttons
                  </div>
                  <div className="  gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Export to GIF/Video
                  </div>
                  <div className="gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    White-labeled Arcades
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2 rounded-lg overflow-hidden ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://cdn.arcade.software/web-assets/form-product.mp4"
                ></video>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sales">
          <Card className="w-full h-auto p-0 border-none shadow-none overflow-hidden">
            <CardContent className=" h-full flex p-0 w-full ">
              <div className="h-full mt-20 w-1/2 p-4 flex flex-col items-start justify-center">
                <h1 className="text-6xl font-sans">
                  Arcade <br /> for sales
                </h1>
                <p className="text-gray-400 text-xl font-light">
                  Create engaging, personalized demos in minutes to win buyers
                  early, showcase your product, and accelerate sales cycles.
                </p>
                <div className=" w-full grid grid-cols-2 grid-rows-2 gap-4">
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Chapters
                  </div>
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Call-to-action buttons
                  </div>
                  <div className="  gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Export to GIF/Video
                  </div>
                  <div className="gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    White-labeled Arcades
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2 rounded-lg overflow-hidden ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://cdn.arcade.software/web-assets/collections.mp4"
                ></video>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="customer success">
          <Card className="w-full h-auto p-0 border-none shadow-none overflow-hidden">
            <CardContent className=" h-full flex p-0 w-full ">
              <div className="h-full mt-20 w-1/2 p-4 flex flex-col items-start justify-center">
                <h1 className="text-6xl font-sans">
                  Arcade <br /> for marketing
                </h1>
                <p className="text-gray-400 text-xl font-light">
                  Build compelling, on-brand demos in minutes to drive leads,
                  boost product adoption, and more effectively tell your
                  product's story.
                </p>
                <div className=" w-full grid grid-cols-2 grid-rows-2 gap-4">
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Chapters
                  </div>
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Call-to-action buttons
                  </div>
                  <div className="  gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Export to GIF/Video
                  </div>
                  <div className="gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    White-labeled Arcades
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2 rounded-lg overflow-hidden ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://cdn.arcade.software/web-assets/brand.mp4"
                ></video>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="training">
          <Card className="w-full h-auto p-0 border-none shadow-none overflow-hidden">
            <CardContent className=" h-full flex p-0 w-full ">
              <div className="h-full mt-20 w-1/2 p-4 flex flex-col items-start justify-center">
                <h1 className="text-6xl font-sans">
                  Arcade <br /> for marketing
                </h1>
                <p className="text-gray-400 text-xl font-light">
                  Build compelling, on-brand demos in minutes to drive leads,
                  boost product adoption, and more effectively tell your
                  product's story.
                </p>
                <div className=" w-full grid grid-cols-2 grid-rows-2 gap-4">
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Chapters
                  </div>
                  <div className=" gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Call-to-action buttons
                  </div>
                  <div className="  gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    Export to GIF/Video
                  </div>
                  <div className="gap-2 flex items-center justify-start p-2 ">
                    {" "}
                    <ArrowUpSquare className=" grid-rows-1 text-gray-400 font-light" />{" "}
                    White-labeled Arcades
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2 rounded-lg overflow-hidden ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://cdn.arcade.software/web-assets/brand.mp4"
                ></video>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="h-full w-full m-4 md:hidden rounded-lg overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="https://cdn.arcade.software/web-assets/brand.mp4"
        ></video>
      </div>
    </div>
  );
}
