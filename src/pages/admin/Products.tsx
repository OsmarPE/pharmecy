import Loading from "@/components/admin/Loading";
import Modal, { ModalButton, ModalContent } from "@/components/admin/Modal";
import FormProduct from "@/components/admin/products/FormProduct";
import RemoveProduct from "@/components/admin/products/RemoveProduct";
import { Button } from "@/components/ui/button";
import { productsColumns, productsData } from "@/payments/columns";
import { DataTable, DataTableProducts } from "@/payments/data-table";
import { getProducts } from "@/services/product.services";
import { useQuery } from "@tanstack/react-query";
import { CirclePlus, CloudUpload, Download, Filter } from "lucide-react";

export default function Products() {

  const { data } = useQuery({ queryKey: ['products'], queryFn: getProducts })

  console.log(data)
  

  return (
    <div className="max-w-6xl">
      <header className="flex  justify-between">
        <div>
          <h1 className="font-medium text-xl">Productos</h1>
          <p className="text-gray-400 text-sm">
            Aquí podrás gestionar todos los productos de tu negocio. Puedes crear, editar y eliminar productos.
          </p>
        </div>
      </header>
      <div className="flex justify-between items-center gap-4 mb-4 mt-6">
        <Button variant={'notion'}>
          <Filter />
          Filtrar
        </Button>
        <div className=" flex justify-end gap-4">
          <Button variant={'notion'}> <CloudUpload /> Subir Excel</Button>
          <Button variant={'notion'}> <Download /> Exportar </Button>
          <Modal>
            <ModalButton variant="dashboard"> <CirclePlus /> Agregar</ModalButton>
            <ModalContent title="Agregar Producto" description="Crea un nuevo producto">
              <FormProduct />
            </ModalContent>
          </Modal>
        </div>
      </div>
      <div className="mt-4">
        {/* {isLoading && <Loading />} */}
        {data && <DataTableProducts options={[]} columns={productsColumns} data={data} />}
      </div>
      <RemoveProduct />
    </div>
  )
}
