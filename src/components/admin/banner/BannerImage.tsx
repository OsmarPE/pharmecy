
interface Props {
    src: string;
}
export default function BannerImage({ src }: Props) {
  return (
    
      <img className="w-full rounded-lg" src={src} alt="imagen de banner" />
  )
}
