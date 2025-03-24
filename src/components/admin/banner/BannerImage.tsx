
interface Props {
    src: string;
}
export default function BannerImage({ src }: Props) {
  return (
    <img className="w-full h-full object-cover rounded-lg" src={src} alt="imagen de banner" />
  )
}
