import React from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

interface TourStepProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

const TourStep: React.FC<TourStepProps> = ({
  title,
  description,
  imageUrl,
  className,
}) => {
  return (
    <Card
      className={cn(
        "overflow-hidden border border-white/20 bg-black/5 backdrop-blur-sm",
        className
      )}
    >
      <CardContent className="p-4 flex flex-col gap-3">
        {imageUrl && (
          <div className="rounded-md overflow-hidden h-28">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TourStep;
