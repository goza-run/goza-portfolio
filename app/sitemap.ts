import { MetadataRoute } from 'next'
//sitemap作成
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goza-portfolio.vercel.app' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/introduce`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/baseball`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/baseball/simulate_detail`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/baseball/simulate_detail/drag`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/baseball/simulate_detail/Lift`, 
      lastModified: new Date(),
    },
  ]
}