import BannerImage from "@/components/admin/banner/BannerImage";
import BannerPlaceholder from "@/components/admin/banner/BannerPlaceholder";
import FormBanner from "@/components/admin/banner/FormBanner";
import Modal, { ModalButton, ModalContent } from "@/components/admin/Modal";
import { Button } from "@/components/ui/button";
import { imagesBanner } from "@/lib/helper";
import { AlignJustify, ChevronLeft, ChevronRight, CirclePlus, Pencil, Plus } from "lucide-react";
import { useState } from "react";

export default function Banner() {

    const [indexImg, setIndexImg] = useState<number | null>(null)
    const [modeEdit, setModeEdit] = useState(false)

    return (
        <div className='max-w-6xl'>
            <header className="mb-4 flex justify-between items-center gap-4">
                <div>
                    <h1 className="font-medium text-xl">Banners</h1>
                    <p className="text-gray-400 text-sm">
                        Aquí podrás gestionar todos los banners de tu negocio. Puedes crear, editar y eliminar banners.
                    </p>
                </div>
                <div className="flex gap-4">
                    {!modeEdit && <Button onClick={() => setModeEdit(true)} variant={'outline'} ><Pencil /> Editar </Button>}
                    {modeEdit && <Button onClick={() => setModeEdit(false)} variant={'outline'}> Cancelar </Button>}
                    {!modeEdit && (
                        <Modal>
                            <ModalButton variant="dashboard"> <CirclePlus /> Agregar</ModalButton>
                            <ModalContent title="Agregar imagen" description="Crea una nueva imagen">
                                <FormBanner />
                            </ModalContent>
                        </Modal>
                    )}
                </div>
            </header>
            <div className="grid grid-cols-[1fr_auto_250px] gap-6 items-start">
                <div>
                    <div className="border-2 border-gray-300 rounded-lg p-2 bg-white border-dashed aspect-video">
                        {indexImg === null ? (
                            <BannerPlaceholder />
                        ) : (
                            <BannerImage src="https://www.emeritafarmacias.com/wp-content/uploads/METRORUBORIL_AZ_CRA_0225.jpg" />
                        )}
                    </div>
                   {indexImg !== null && <div className="flex items-center justify-center gap-4 mt-4">
                        <Button onClick={() => setIndexImg(indexImg - 1)} variant={'outline'} className="size-12" disabled={indexImg === 0}>
                             <ChevronLeft />
                        </Button>
                       <Button onClick={() => setIndexImg(indexImg + 1)} variant={'outline'} className="size-12" disabled={indexImg === imagesBanner.length - 1}>
                             <ChevronRight />
                        </Button>
                    </div>}
                </div>
                <div className="w-[1px] h-full bg-gray-200"></div>
                <aside className="grid gap-4 ">
                    <div className={`space-y-4 ${modeEdit ? ' border border-gray-300 p-2 rounded-xl' : ''}`}>
                        {
                            imagesBanner.map((image, index) => (
                                <figure role="button" onClick={() => setIndexImg(index)} key={index} className={`relative cursor-pointer rounded-md p-1 bg-white border-2  h-32 border-dashed hover:border-cyan-700  transition-colors duration-300 group/img ${index === indexImg ? 'border-cyan-700' : 'border-gray-300'}`}>
                                    <img className="w-full h-full object-cover rounded-md " src={image.src} alt="" />
                                    {modeEdit && <Button size={'icon'} variant={'dashboard'} className="absolute top-2 right-2 opacity-0 transition-opacity group-hover/img:opacity-100">
                                        <AlignJustify />
                                    </Button>}
                                </figure>
                            ))
                        }
                    </div>
                </aside>
            </div>
        </div>
    )
}
