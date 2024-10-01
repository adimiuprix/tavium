import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-lime-200 h-screen">
        <div className="px-4 pt-4">

            <div className="flex flex-col p-5 rounded-t-lg bg-blue-500 font-montserrat text-black">
              <div className="my-4 flex justify-center">
                <div className="flex h-[125px] w-[148px] justify-center">
                  <Image className="pointer-events-none" src={'/money-dogs.webp'} alt={'money dogs'} loading={'lazy'} width={'128'} height={'124'} decoding="async" />
                </div>
              </div>
              <div className="flex flex-wrap justify-center pl-1 text-4xl font-bold">
                <div>25,740</div>
                <div>.</div>
                <div className="min-w-[5.5rem] text-[2rem] opacity-40">6213</div>
              </div>

              <p className="mt-1 text-center text-2xl font-bold">POINT</p>

              <div className="bg-black mx-2 mt-2 flex items-center justify-between rounded-lg bg-mdogsgray100 px-4 py-3">
                <p className="text-sm font-bold text-white">APY - 100%</p>
                <p className="text-sm font-bold text-white">0.00000000 per second</p>
              </div>
            </div>

        </div>
      </div>
    </>
  );
}
