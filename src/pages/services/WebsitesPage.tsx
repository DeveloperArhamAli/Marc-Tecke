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
  const images = [
    {
      src: WebsiteImage1,
      link: "https://benchmarkcleaning.co.uk/",
      heading: "Benchmark Cleaning Services"
    },
    {
      src: WebsiteImage2,
      link: "https://bonniebyford.com/",
      heading: "Bonnie By Ford"
    },
    {
      src: WebsiteImage3,
      link: "https://greenbridge.com/",
      heading: "Green Bridge"
    },
    {
      src: WebsiteImage4,
      link: "https://www.maurigocarrentals.com/",
      heading: "MauriGo Car Rentals"
    },
    {
      src: WebsiteImage5,
      link: "https://hairfree.milanlaser.com/",
      heading: "Milan Laser Hair Removal"
    },
    {
      src: WebsiteImage6,
      link: "https://pinesrvcamping.com/",
      heading: "Pines RV Park"
    },
    {
      src: WebsiteImage7,
      link: "https://sabeydatacenters.com/locations/quincy-data-center",
      heading: "SDC Quincy Data Centers"
    },
    {
      src: WebsiteImage8,
      link: "https://www.siestamotelcolfax.com/",
      heading: "Siesta Motel Colfax"
    },
    {
      src: WebsiteImage9,
      link: "https://thedeadrabbit.com/",
      heading: "The Dead Rabbit"
    },
    {
      src: WebsiteImage10,
      link: "https://www.traderjoes.com/home",
      heading: "Trader Joe's"
    },
    {
      src: WebsiteImage11,
      link: "https://usaroofmasters.com/",
      heading: "USA Roof Masters"
    }
  ]
  
  return (
    <div className="flex flex-col gap-10 pt-20 pb-10">
      <h1 className="text-center text-3xl">Websites</h1>
      <div className="flex flex-wrap px-5 justify-center">
        {images.map((image, index) => (
          <div key={index} className="inline-block w-1/2 h-fit p-2">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={image.src}
                alt={`Website ${index + 1}`}
              />
              <h2 className="text-center text-xl mt-2">{image.heading}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default WebsitesPage