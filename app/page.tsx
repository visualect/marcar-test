import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1200px] mx-auto my-0">
      <Sorting />
      <Cards />
      <Pagination />
    </div>
  );
}
