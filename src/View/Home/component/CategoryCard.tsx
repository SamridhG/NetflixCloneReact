import { POSTER_LINK } from "../helper/constant";

interface CategoryCardProps {
  posterPath: string;
  name: string;
}

export default function CategoryCard({ name, posterPath }: CategoryCardProps) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative w-[420px] h-[280px]">
      <div className="relative w-full h-[70%]">
        <img
          className="w-full h-full object-cover"
          src={`${POSTER_LINK}${posterPath}`}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black bg-opacity-75 p-4 text-white text-center flex items-center justify-center">
        <div className="text-2xl font-semibold leading-snug truncate px-4">
          {name}
        </div>
      </div>
    </div>
  );
}
