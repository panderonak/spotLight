import { VideoCard } from "../../components";

export default function HomePage() {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4"></div>
      </section>
    </div>
  );
}
