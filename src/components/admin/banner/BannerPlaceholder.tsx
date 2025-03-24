import { GalleryVerticalEnd } from "lucide-react";

export default function BannerPlaceholder() {
    return (
        <div className="h-full flex items-center justify-center flex-col gap-4">
            <div className="size-28 rounded-full bg-cyan-50 border-2 border-cyan-400 text-cyan-800 border-dashed flex items-center justify-center">
                <GalleryVerticalEnd width={28} height={28} />
            </div>
            <div className="text-center">
                <h4 className="font-medium">Seleccionar una imagen</h4>
                <p className="text-gray-400 text-sm">
                    Haz clic sobre la imagen que quiere previsualizar
                </p>
            </div>
        </div>
    )
}
