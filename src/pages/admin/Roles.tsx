import FormCategory from "@/components/admin/categories/FormCategory";
import Modal, { ModalButton, ModalContent } from "@/components/admin/Modal";
import { rolesColumns, rolesData } from "@/payments/columns";
import { DataTable } from "@/payments/data-table";
import { CirclePlus, Plus } from "lucide-react";

export default function Roles() {
  return (
    <div className="max-w-5xl">
      <header className="mb-4">
          <h1 className="font-medium text-xl">Roles</h1>
          <p className="text-gray-400 text-sm">
            Aquí podrás gestionar todos los roles de tu negocio. Puedes crear, editar y eliminar roles.
          </p>
      </header>
      <div className="flex justify-end">
          <Modal>
            <ModalButton variant="dashboard"> <CirclePlus /> Agregar</ModalButton>
            <ModalContent title="Agregar rol" description="Crear un nuevo rol para los usuarios"> 
              <FormCategory />
            </ModalContent>
          </Modal>
      </div>
      <div className="mt-4">
        <DataTable columns={rolesColumns} data={rolesData} />
      </div>
    </div>
  )
}
