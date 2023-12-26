import { Testimonial } from "@/types/interfaces";
import { Quote } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard: FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  review,
  role,
}) => {
  return (
    <article className="flex flex-col items-center md:items-start gap-4 py-6 px-4 rounded-lg hover:bg-slate-800 capitalize">
      <Quote className="w-12 h-12 text-sky-600" />
      <p className="text-lg text-center md:text-start">{review}</p>
      <div className="flex items-start gap-2">
        <Image
          src={imageUrl}
          width={40}
          height={40}
          alt={name}
          className="rounded-full object-contain"
        />
      </div>
      <div>
        <h4 className="text-slate-100 font-semibold trancking-wide">{name}</h4>
        <small className="text-sky-600 font-semibold">{role}</small>
      </div>
    </article>
  );
};

export default TestimonialCard;
