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
    <div className="flex flex-col gap-10 pt-20 pb-10">
      <h1 className="text-center text-3xl">Websites</h1>
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
            { image: WebsiteImage1 },
            { image: WebsiteImage2 },
            { image: WebsiteImage3 },
            { image: WebsiteImage4 },
            { image: WebsiteImage5 },
            { image: WebsiteImage6 },
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