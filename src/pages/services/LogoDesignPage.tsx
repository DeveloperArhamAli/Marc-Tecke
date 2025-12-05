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
    LogoDesignImage12,
    LogoDesignImage13,
    LogoDesignImage14,
    LogoDesignImage15,
    LogoDesignImage16,
    LogoDesignImage17,
    LogoDesignImage18,
    LogoDesignImage19,
    LogoDesignImage20,
    LogoDesignImage21,
    LogoDesignImage22,
    LogoDesignImage23,
    LogoDesignImage24,
    LogoDesignImage25,
    LogoDesignImage26,
    LogoDesignImage27,
    LogoDesignImage28,
    LogoDesignImage29,
    LogoDesignImage30,
    LogoDesignImage31,
    LogoDesignImage32,
    LogoDesignImage33,
    LogoDesignImage34,
    LogoDesignImage35,
    LogoDesignImage36,
    LogoDesignImage37,
    LogoDesignImage38,
    LogoDesignImage39,
    LogoDesignImage40,
    LogoDesignImage41,
    LogoDesignImage42,
    LogoDesignImage43,
    LogoDesignImage44,
    LogoDesignImage45,
    LogoDesignImage46,
    LogoDesignImage47,
    LogoDesignImage48,
    LogoDesignImage49,
    LogoDesignImage50,
    LogoDesignImage51,
    LogoDesignImage52,
    LogoDesignImage53,
    LogoDesignImage54
} from "@/assets/images/portfolioImages"

function LogoDesignPage() {
  return (
    <div className="h-full pt-20 pb-10 flex flex-col gap-8">
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>
        <h1 className="heading-xl mb-6 text-foreground text-center"><span className="gradient-text">Logo </span>Designs</h1>
      </div>
      <div className="-my-20">
        <CircularGallery
          bend={0} 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={10}
          autoSlide={true}
          autoDirection="left"
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
            { image: LogoDesignImage12 },
            { image: LogoDesignImage13 },
            { image: LogoDesignImage14 },
            { image: LogoDesignImage15 },
            { image: LogoDesignImage16 },
            { image: LogoDesignImage17 },
            { image: LogoDesignImage18 },
          ]}
        />
      </div>
      <div className="-my-20">
        <CircularGallery
          bend={0} 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={10}
          autoSlide={true}
          autoDirection="right"
          items={[
            { image: LogoDesignImage19 },
            { image: LogoDesignImage20 },
            { image: LogoDesignImage21 },
            { image: LogoDesignImage22 },
            { image: LogoDesignImage23 },
            { image: LogoDesignImage24 },
            { image: LogoDesignImage25 },
            { image: LogoDesignImage26 },
            { image: LogoDesignImage27 },
            { image: LogoDesignImage28 },
            { image: LogoDesignImage29 },
            { image: LogoDesignImage30 },
            { image: LogoDesignImage31 },
            { image: LogoDesignImage32 },
            { image: LogoDesignImage33 },
            { image: LogoDesignImage34 },
            { image: LogoDesignImage35 },
            { image: LogoDesignImage36 },
          ]}
        />
      </div>
      <div className="-my-20">
        <CircularGallery
          bend={0} 
          borderRadius={0.05} 
          scrollEase={0.2}
          itemHeight={10}
          itemWidth={10}
          autoSlide={true}
          autoDirection="left"
          items={[
            { image: LogoDesignImage37 },
            { image: LogoDesignImage38 },
            { image: LogoDesignImage39 },
            { image: LogoDesignImage40 },
            { image: LogoDesignImage41 },
            { image: LogoDesignImage42 },
            { image: LogoDesignImage43 },
            { image: LogoDesignImage44 },
            { image: LogoDesignImage45 },
            { image: LogoDesignImage46 },
            { image: LogoDesignImage47 },
            { image: LogoDesignImage48 },
            { image: LogoDesignImage49 },
            { image: LogoDesignImage50 },
            { image: LogoDesignImage51 },
            { image: LogoDesignImage52 },
            { image: LogoDesignImage53 },
            { image: LogoDesignImage54 },
          ]}
        />
      </div>
    </div>
  )
}
export default LogoDesignPage