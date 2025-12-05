import { BrandIdentityImage1, BrandIdentityImage2,
    BrandIdentityImage3,
    BrandIdentityImage4,
    BrandIdentityImage5,
    BrandIdentityImage6,    
    BrandIdentityImage7,
    BrandIdentityImage8,
    BrandIdentityImage9,
    BrandIdentityImage10,
    BrandIdentityImage11,
    BrandIdentityImage12,
    BrandIdentityImage13,
    BrandIdentityImage14,
    BrandIdentityImage15,
    BrandIdentityImage16,
    BrandIdentityImage17,
    BrandIdentityImage18,
    BrandIdentityImage19,
    BrandIdentityImage20
} from "@/assets/images/portfolioImages"
import CircularGallery from "../../components/CircularGallery"

function BrandIdentityPage() {
  return (
    <div className="flex flex-col gap-10 pt-20 pb-10">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <h1 className="heading-xl mb-6 text-foreground text-center"><span className="gradient-text">Brand </span>Identity</h1>
      </div>
      <div className="-my-20">
        <CircularGallery
          bend={0} 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={15}
          autoSlide={true}
          autoDirection="left"
          items={[
            { image: BrandIdentityImage1 },
            { image: BrandIdentityImage2 },
            { image: BrandIdentityImage3 },
            { image: BrandIdentityImage4 },
            { image: BrandIdentityImage5 },
            { image: BrandIdentityImage6 },
            { image: BrandIdentityImage7 },
            { image: BrandIdentityImage8 },
            { image: BrandIdentityImage9 },
            { image: BrandIdentityImage10 },
          ]}
        />
      </div>
      <div className="-my-20">
        <CircularGallery
          bend={0} 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={15}
          autoSlide={true}
          autoDirection="right"
          items={[
            { image: BrandIdentityImage11 },
            { image: BrandIdentityImage12 },
            { image: BrandIdentityImage13 },
            { image: BrandIdentityImage14 },
            { image: BrandIdentityImage15 },
            { image: BrandIdentityImage16 },
            { image: BrandIdentityImage17 },
            { image: BrandIdentityImage18 },
            { image: BrandIdentityImage19 },
            { image: BrandIdentityImage20 },
          ]}
        />
      </div>
    </div>
  )
}
export default BrandIdentityPage