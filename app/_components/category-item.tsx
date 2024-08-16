import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white shadow-md rounded-full">
      <Image
        alt={category.name}
        src={category.imageUrl}
        height={30}
        width={30}
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};
export default CategoryItem;
