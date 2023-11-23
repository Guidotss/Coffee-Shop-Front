import { Suspense } from "react";
import Image from "next/image";
import { GetProductResponse } from "@/interfaces";
import { fetchAdapter } from "@/utils";
import { ProductData, ProductPrices } from "./components";
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

  return (
    <main className="w-full flex flex-col item-center justify-center md:py-10 md:px-56">
      <Suspense fallback={<div>Loading...</div>}>
        <section className="flex lg:justify-around">
          <div className="w-full lg:flex lg:gap-16 md:px-2">
            <Image
              className="w-full md:w-[30vw] h-[55vh] md:h-[80vh] object-center object-cover lg:rounded-md"
              src={product?.imagelink_portrait || ""}
              alt={product?.name || ""}
              width={500}
              height={500}
              priority
            />
            <div className="md:w-[30vw] md:flex md:flex-col md:justify-center md:items-center">
              <ProductData
                name={product?.name!}
                description={product?.description!}
              />
              <ProductPrices
                product_id={product?.id!}
                prices={product?.prices!}
              />
            </div>
          </div>
          <div className="hidden lg:block" />
        </section>
      </Suspense>
    </main>
  );
}
