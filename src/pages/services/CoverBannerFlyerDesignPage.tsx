import { 
    CoverBannerFlyerDesignImage1,
    CoverBannerFlyerDesignImage2,
    CoverBannerFlyerDesignImage3,
    CoverBannerFlyerDesignImage4,
    CoverBannerFlyerDesignImage5,
    CoverBannerFlyerDesignImage6,
    CoverBannerFlyerDesignImage7,
    CoverBannerFlyerDesignImage8,
    CoverBannerFlyerDesignImage9,
    CoverBannerFlyerDesignImage10,
    CoverBannerFlyerDesignImage11,
    CoverBannerFlyerDesignImage12,
    CoverBannerFlyerDesignImage13,
    CoverBannerFlyerDesignImage14,
    CoverBannerFlyerDesignImage15,
    CoverBannerFlyerDesignImage16,
    CoverBannerFlyerDesignImage17,
    CoverBannerFlyerDesignImage18,
    CoverBannerFlyerDesignImage19,
    CoverBannerFlyerDesignImage20,
    CoverBannerFlyerDesignImage21,
    CoverBannerFlyerDesignImage22
} from "@/assets/images/portfolioImages"
import CircularGallery from "../../components/CircularGallery"

function CoverBannerFlyerDesignPage() {
  return (
    <div>
      <div>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={15}
          items={[
            { image: CoverBannerFlyerDesignImage1 },
            { image: CoverBannerFlyerDesignImage2 },
            { image: CoverBannerFlyerDesignImage3 },
            { image: CoverBannerFlyerDesignImage4 },
            { image: CoverBannerFlyerDesignImage5 },
            { image: CoverBannerFlyerDesignImage6 },
            { image: CoverBannerFlyerDesignImage7 },
            { image: CoverBannerFlyerDesignImage8 },
            { image: CoverBannerFlyerDesignImage9 },
            { image: CoverBannerFlyerDesignImage10 },
            { image: CoverBannerFlyerDesignImage11 },
            { image: CoverBannerFlyerDesignImage12 },
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
            { image: CoverBannerFlyerDesignImage13 },
            { image: CoverBannerFlyerDesignImage14 },
            { image: CoverBannerFlyerDesignImage15 },
            { image: CoverBannerFlyerDesignImage16 },
            { image: CoverBannerFlyerDesignImage17 },
            { image: CoverBannerFlyerDesignImage18 },
            { image: CoverBannerFlyerDesignImage19 },
            { image: CoverBannerFlyerDesignImage20 },
            { image: CoverBannerFlyerDesignImage21 },
            { image: CoverBannerFlyerDesignImage22 },
          ]}
        />
      </div>
    </div>
  )
}
export default CoverBannerFlyerDesignPage