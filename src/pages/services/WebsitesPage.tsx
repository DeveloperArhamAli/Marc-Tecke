import CircularGallery from "../../components/CircularGallery"
import { 
  WebsiteImage1,
  WebsiteImage2,
  WebsiteImage3,
  WebsiteImage4,
  WebsiteImage5,
  WebsiteImage6,
  WebsiteImage7,
  WebsiteImage8,
  WebsiteImage9,
  WebsiteImage10,
  WebsiteImage11
} from "@/assets/images/portfolioImages"

function WebsitesPage() {
  return (
    <div>
      <div>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={7}
          itemWidth={7}
          items={[
            { image: WebsiteImage1 },
            { image: WebsiteImage2 },
            { image: WebsiteImage3 },
            { image: WebsiteImage4 },
            { image: WebsiteImage5 },
            { image: WebsiteImage6 },
          ]}
        />
      </div>
      <div>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={7}
          itemWidth={7}
          items={[
            { image: WebsiteImage7 },
            { image: WebsiteImage8 },
            { image: WebsiteImage9 },
            { image: WebsiteImage10 },
            { image: WebsiteImage11 },
          ]}
        />
      </div>
    </div>
  )
}
export default WebsitesPage