import { 
  ProductPackagingDesignImage1,
    ProductPackagingDesignImage2,
    ProductPackagingDesignImage3,
    ProductPackagingDesignImage4,
    ProductPackagingDesignImage5,
    ProductPackagingDesignImage6,
    ProductPackagingDesignImage7,
    ProductPackagingDesignImage8,
    ProductPackagingDesignImage9,
    ProductPackagingDesignImage10,
    ProductPackagingDesignImage11,
    ProductPackagingDesignImage12,
    ProductPackagingDesignImage13,
    ProductPackagingDesignImage14,
    ProductPackagingDesignImage15,
    ProductPackagingDesignImage16,
    ProductPackagingDesignImage17,
    ProductPackagingDesignImage18,
    ProductPackagingDesignImage19,
    ProductPackagingDesignImage20,
    ProductPackagingDesignImage21,
    ProductPackagingDesignImage22,
    ProductPackagingDesignImage23,
    ProductPackagingDesignImage24,
    ProductPackagingDesignImage25,
    ProductPackagingDesignImage26,
    ProductPackagingDesignImage27,
    ProductPackagingDesignImage28,
    ProductPackagingDesignImage29,
    ProductPackagingDesignImage30  
} from "@/assets/images/portfolioImages"
import CircularGallery from "../../components/CircularGallery"

function ProductPackagingDesignPage() {
  return (
    <div className="flex flex-col gap-10 pt-20 pb-10">
      <h1 className="text-center text-3xl">Product Packaging Design</h1>
          <div className="-my-20">
            <CircularGallery
              bend={0} 
              borderRadius={0.05} 
              scrollEase={0.2}
              itemHeight={10}
              itemWidth={14}
              autoSlide={true}
              autoDirection="left"
              items={[
                { image: ProductPackagingDesignImage1 },
                { image: ProductPackagingDesignImage2 },
                { image: ProductPackagingDesignImage3 },
                { image: ProductPackagingDesignImage4 },
                { image: ProductPackagingDesignImage5 },
                { image: ProductPackagingDesignImage6 },
                { image: ProductPackagingDesignImage7 },
                { image: ProductPackagingDesignImage8 },
                { image: ProductPackagingDesignImage9 },
                { image: ProductPackagingDesignImage10 },
                { image: ProductPackagingDesignImage11 },
                { image: ProductPackagingDesignImage12 },
                { image: ProductPackagingDesignImage13 },
                { image: ProductPackagingDesignImage14 },
                { image: ProductPackagingDesignImage15 },
              ]}
              />
          </div>
          <div className="-my-20">
            <CircularGallery
              bend={0} 
              borderRadius={0.05} 
              scrollEase={0.2}
              itemHeight={10}
              itemWidth={14}
              autoSlide={true}
              autoDirection="right"
              items={[
                { image: ProductPackagingDesignImage16 },
                { image: ProductPackagingDesignImage17 },
                { image: ProductPackagingDesignImage18 },
                { image: ProductPackagingDesignImage19 },
                { image: ProductPackagingDesignImage20 },
                { image: ProductPackagingDesignImage21 },
                { image: ProductPackagingDesignImage22 },
                { image: ProductPackagingDesignImage23 },
                { image: ProductPackagingDesignImage24 },
                { image: ProductPackagingDesignImage25 },
                { image: ProductPackagingDesignImage26 },
                { image: ProductPackagingDesignImage27 },
                { image: ProductPackagingDesignImage28 },
                { image: ProductPackagingDesignImage29 },
                { image: ProductPackagingDesignImage30 },
              ]}
            />
          </div>
        </div>
  )
}
export default ProductPackagingDesignPage