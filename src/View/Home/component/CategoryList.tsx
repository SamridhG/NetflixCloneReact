import useCategory from "../../../Hooks/useCategory";
import { LIST_PORTO } from "../helper/constant";
import CategoryCard from "./CategoryCard";

export default function CategoryList({ name, path }: LIST_PORTO) {
  const { data } = useCategory({ endPoint: path });
  console.log("list", data);
  
  return (
    <div>
      <div className="font-extrabold text-4xl text-white pt-5 px-10">
        {name}
      </div>
      <div className="flex overflow-x-auto space-x-4 px-12 py-4 scrollbar-hide">
        {
          data?.map((details: any) => (
            <CategoryCard
              key={details?.id}
              name={details?.title}
              posterPath={details.poster_path}
            />
          ))
        }
      </div>
    </div>
  );
}
