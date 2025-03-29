import RemoveProduct from "@/components/admin/products/RemoveProduct";
import { Button } from "@/components/ui/button";
import { productsColumns, productsData } from "@/payments/columns";
import { DataTable } from "@/payments/data-table";
import { CirclePlus, CloudUpload, Download } from "lucide-react";

export default function Products() {
  return (
    <div className="max-w-5xl">
      <header className="flex  justify-between">
        <div>
          <h1 className="font-medium text-xl">Productos</h1>
          <p className="text-gray-400 text-sm">
            Aquí podrás gestionar todos los productos de tu negocio. Puedes crear, editar y eliminar productos.
          </p>
        </div>
      </header>
      <div className="mb-4 mt-6 flex justify-end gap-4">
        <Button variant={'notion'}> <CloudUpload /> Subir Excel</Button>
        <Button variant={'notion'}> <Download /> Exportar </Button>
        <Button variant={'dashboard'}> <CirclePlus /> Agregar</Button>
      </div>
      <div className="mt-4">
        <DataTable columns={productsColumns} data={productsData} />
      </div>
      <RemoveProduct />
    </div>
  )
}
