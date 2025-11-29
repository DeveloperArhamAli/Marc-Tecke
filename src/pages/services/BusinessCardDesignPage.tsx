import CircularGallery from "../../components/CircularGallery"
import { 
    BusinessCardDesignImage1,
    BusinessCardDesignImage2,
    BusinessCardDesignImage3,
    BusinessCardDesignImage4,
    BusinessCardDesignImage5,
    BusinessCardDesignImage6,
    BusinessCardDesignImage7,
    BusinessCardDesignImage8,
    BusinessCardDesignImage9,
    BusinessCardDesignImage10,
    BusinessCardDesignImage11,
    BusinessCardDesignImage12,
    BusinessCardDesignImage13,
    BusinessCardDesignImage14,
    BusinessCardDesignImage15,
    BusinessCardDesignImage16,
    BusinessCardDesignImage17,
    BusinessCardDesignImage18,
    BusinessCardDesignImage19,
    BusinessCardDesignImage20,
    BusinessCardDesignImage21,
    BusinessCardDesignImage22,
    BusinessCardDesignImage23,
    BusinessCardDesignImage24,
    BusinessCardDesignImage25 
} from "@/assets/images/portfolioImages"

function BusinessCardDesignPage() {
  return (
    <div>
      <div>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={14}
          items={[
            { image: BusinessCardDesignImage1 },
            { image: BusinessCardDesignImage2 },
            { image: BusinessCardDesignImage3 },
            { image: BusinessCardDesignImage4 },
            { image: BusinessCardDesignImage5 },
            { image: BusinessCardDesignImage6 },
            { image: BusinessCardDesignImage7 },
            { image: BusinessCardDesignImage8 },
            { image: BusinessCardDesignImage9 },
            { image: BusinessCardDesignImage10 },
            { image: BusinessCardDesignImage11 },
            { image: BusinessCardDesignImage12 },
          ]}
        />
      </div>
      <div>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={15}
          items={[
            { image: BusinessCardDesignImage13 },
            { image: BusinessCardDesignImage14 },
            { image: BusinessCardDesignImage15 },
            { image: BusinessCardDesignImage16 },
            { image: BusinessCardDesignImage17 },
            { image: BusinessCardDesignImage18 },
            { image: BusinessCardDesignImage19 },
            { image: BusinessCardDesignImage20 },
            { image: BusinessCardDesignImage21 },
            { image: BusinessCardDesignImage22 },
            { image: BusinessCardDesignImage23 },
            { image: BusinessCardDesignImage24 },
            { image: BusinessCardDesignImage25 },
          ]}
        />
      </div>
    </div>
  )
}
export default BusinessCardDesignPage