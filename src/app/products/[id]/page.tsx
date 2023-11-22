import { GetProductResponse } from "@/interfaces";
import { fetchAdapter } from "@/utils";
import Image from "next/image";
import { Suspense } from "react";
interface Props {
  params: {
    id: string;
  };
}

const GetProductById = async (id: string) => {
  const response = await fetchAdapter.get<GetProductResponse>(`/shop/${id}`);
  if (response.ok) {
    return response.data;
  } else {
    return null;
  }
};

export default async function ProductPage({ params }: Props) {
  const product = await GetProductById(params.id);
  console.log(product);
  return (
    <main className="w-full flex flex-col item-center justify-center md:py-10 md:px-56">
      <Suspense fallback={<div>Loading...</div>}>
        <section className="flex lg:justify-around">
          <div className="w-full lg:flex lg:gap-16">
            <Image
              className="w-full md:w-3/4 h-[55vh] md:h-[80vh] object-center object-cover lg:rounded-md"
              src={product?.imagelink_portrait || ""}
              alt={product?.name || ""}
              width={500}
              height={500}
              priority
            />
            <div className="md:w-96 md:flex md:flex-col">
                <div className="absolute md:relative flex items-center justify-center  h-16 w-full bg-transparent bg-opacity-60 -mt-20 md:mt-0 backdrop-blur-lg md:backdrop-blur-0">
                  <h1 className="text-white text-xl lg:text-4xl font-semibold"> 
                    {product?.name}
                  </h1>
                </div>
                <div className="flex items-center justify-center mt-5 px-2 md:mt-0">
                  <p className="text-white text-md md:text-lg md:text-start">
                    {product?.description.replace("`", "")}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-10 mt-10">
                  {product?.prices.map((price) => (
                    <div
                      key={Math.random()}
                      className="flex flex-col items-center justify-center gap-2 bg-primary_orange w-14 h-14 md:w-16 md:h-16 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
                    >
                      <div className="flex flex-col items-center">
                        <h1 className="text-white text-xl lg:text-2xl font-semibold">
                          {price.size}
                        </h1>

                        <div className="text-white">
                          <span>{price.currency}</span>
                          <span>{price.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full flex items-center justify-center gap-16 md:gap-[76px] mt-10">
                  <button className="text-2xl text-white bg-primary_orange w-10 h-10 md:w-14 md:h-14 rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out">
                    -
                  </button>
                  <span className="text-2xl md:text-3xl text-white">1</span>
                  <button className="text-2xl text-white bg-primary_orange w-10 h-10 md:w-14 md:h-14 rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out">
                    +
                  </button>
                </div>
                <div className="flex items-center justify-center gap-10 mt-10 p-10  md:p-0">
                  <button className="bg-white text-black px-4 py-2 md:px-10 rounded-md">
                    Add to cart
                  </button>

                  <button className="bg-primary_orange text-white px-4 py-2 md:px-10 rounded-md">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          <div className="hidden lg:block" />
        </section>
      </Suspense>
    </main>
  );
}
