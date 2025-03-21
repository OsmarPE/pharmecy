import FormCategory from "@/components/admin/categories/FormCategory";
import Modal, { ModalButton, ModalContent } from "@/components/admin/Modal";
import { locationsColumns, locationsData } from "@/payments/columns";
import { DataTable } from "@/payments/data-table";
import { CirclePlus } from "lucide-react";

export default function Locations() {
  return (
    <div className="max-w-6xl">
      <header className=" mb-4">
        <h1 className="font-medium text-xl">Sucursales</h1>
        <p className="text-gray-400 text-sm">
          Aquí podrás gestionar todas las sucursales de tu negocio. Puedes crear, editar y eliminar sucursales.
        </p>
      </header>
      <div className="mb-4 flex justify-end">
        <Modal>
          <ModalButton variant="notion"> <CirclePlus/> Agregar</ModalButton>
          <ModalContent title="Agregar sucursal" description="Crea una nueva sucursal">
            <FormCategory />
          </ModalContent>
        </Modal>
      </div>
      <div>
        <DataTable columns={locationsColumns} data={locationsData} />
      </div>
    </div>
  )
}
