import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Banner() {
    return (
        <div className='max-w-5xl'>
            <header className="mb-4">
                <h1 className="font-medium text-xl">Banners</h1>
                <p className="text-gray-400 text-sm">
                    Aquí podrás gestionar todos los banners de tu negocio. Puedes crear, editar y eliminar banners.
                </p>
            </header>
            <div className="grid grid-cols-3 gap-4">
                <article className="border relative border-gray-300 rounded-lg p-2 bg-white aspect-video">
                    <img className="w-full h-full object-cover" src="https://www.emeritafarmacias.com/wp-content/uploads/METRORUBORIL_AZ_CRA_0225.jpg" alt="" />
                    <div className="absolute rounded font-medium text-gray-600 border border-gray-300 text-lg size-10 top-4 left-4 flex justify-center items-center bg-gray-100 backdrop-blur-sm">
                        6
                    </div>  
                </article>
                <Button className="h-full w-full text-gray-400" variant={'secondary'}>
                    <Plus width={50} height={50} className="size-10" />
                </Button>
            </div>
        </div>
    )
}
