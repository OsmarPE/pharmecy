import CategoryCard from "@/components/admin/categories/CategoryCard";
import EditCategory from "@/components/admin/categories/EditCategory";
import FormCategory from "@/components/admin/categories/FormCategory";
import RemoveCategory from "@/components/admin/categories/RemoveCategory";
import Modal, { ModalButton, ModalContent } from "@/components/admin/Modal";
import { useIdParams } from "@/hooks/use-idparams";
import { CirclePlus } from "lucide-react";


export default function Categories() {

  const { id } = useIdParams("editid")

  return (
    <div className="max-w-5xl">
      <header className="flex  justify-between">
        <div>
          <h1 className="font-medium text-xl">Categorias</h1>
          <p className="text-gray-400 text-sm">
            Aquí podrás gestionar todas las categorías de tu negocio. Puedes crear, editar y eliminar categorías.
          </p>
        </div>
          <Modal>
              <ModalButton variant="dashboard"> <CirclePlus /> Agregar</ModalButton>
              <ModalContent title="Agregar categoría" description="Crea una nueva categoría">
                <FormCategory />
              </ModalContent>
          </Modal>
      </header>
      <div className="mt-6 grid grid-cols-3 gap-4">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
      </div>
      <RemoveCategory />
      {id && <EditCategory />}
    </div>
  )
}
