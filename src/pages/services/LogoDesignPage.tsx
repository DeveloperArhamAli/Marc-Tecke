import CircularGallery from "../../components/CircularGallery"
import { 
  LogoDesignImage1,
    LogoDesignImage2,
    LogoDesignImage3,
    LogoDesignImage4,
    LogoDesignImage5,
    LogoDesignImage6,
    LogoDesignImage7,
    LogoDesignImage8,
    LogoDesignImage9,
    LogoDesignImage10,
    LogoDesignImage11,
} from "@/assets/images/portfolioImages"

function LogoDesignPage() {
  return (
    <div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
          itemHeight={10}
          itemWidth={10}
          items={[
            { image: LogoDesignImage1 },
            { image: LogoDesignImage2 },
            { image: LogoDesignImage3 },
            { image: LogoDesignImage4 },
            { image: LogoDesignImage5 },
            { image: LogoDesignImage6 },
            { image: LogoDesignImage7 },
            { image: LogoDesignImage8 },
            { image: LogoDesignImage9 },
            { image: LogoDesignImage10 },
            { image: LogoDesignImage11 },
          ]}
        />
      </div>
      {/* <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
          items={[
            { image: LogoDesignImage12 },
            { image: LogoDesignImage13 },
            { image: LogoDesignImage14 },
            { image: LogoDesignImage15 },
            { image: LogoDesignImage16 },
            { image: LogoDesignImage17 },
            { image: LogoDesignImage18 },
            { image: LogoDesignImage19 },
            { image: LogoDesignImage20 },
            { image: LogoDesignImage21 },
            { image: LogoDesignImage22 },
          ]}
        />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
          items={[
            { image: LogoDesignImage1 },
            { image: LogoDesignImage2 },
            { image: LogoDesignImage4 },
            { image: LogoDesignImage5 },
            { image: LogoDesignImage6 },
            { image: LogoDesignImage7 },
            { image: LogoDesignImage8 },
            { image: LogoDesignImage9 },
            { image: LogoDesignImage10 },
            { image: LogoDesignImage11 },
          ]}
        />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
          items={[
            { image: LogoDesignImage1 },
            { image: LogoDesignImage2 },
            { image: LogoDesignImage4 },
            { image: LogoDesignImage5 },
            { image: LogoDesignImage6 },
            { image: LogoDesignImage7 },
            { image: LogoDesignImage8 },
            { image: LogoDesignImage9 },
            { image: LogoDesignImage10 },
            { image: LogoDesignImage11 },
          ]}
        />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
          items={[
            { image: LogoDesignImage1 },
            { image: LogoDesignImage2 },
            { image: LogoDesignImage4 },
            { image: LogoDesignImage5 },
            { image: LogoDesignImage6 },
            { image: LogoDesignImage7 },
            { image: LogoDesignImage8 },
            { image: LogoDesignImage9 },
            { image: LogoDesignImage10 },
            { image: LogoDesignImage11 },
          ]}
        />
      </div> */}
    </div>
  )
}
export default LogoDesignPage