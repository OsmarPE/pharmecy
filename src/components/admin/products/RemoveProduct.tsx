import { Button } from "@/components/ui/button";
import Modal, { ModalContent } from "../Modal";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ButtonForm from "@/components/components-general/ButtonForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/services/product.services";
import { toast } from "sonner";

export default function RemoveProduct() {

   const [searchParams] = useSearchParams()
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const id = searchParams.get('removeid') 
   const client = useQueryClient()
   const mutation = useMutation({
       mutationFn: deleteProduct,
   })
   if(!id) return null

   const handleremoveItem = () => {
    mutation.mutate(id as string,{
        onSuccess: (message) => {
            toast.success(message)
            client.invalidateQueries({queryKey: ['products']})
            handleCancel()
        },
        onError: (error) => {
            console.log(error);
            toast.error('Error al eliminar')
        }
    })
   }
   const handleCancel = () => navigate(pathname,{replace: true})
   

  return (
    <Modal defaultState={true} >
        <ModalContent changeOpen={handleCancel} title="Eliminar rol" description="¿Estás seguro de que quieres eliminar este rol?">
            <div className="flex justify-end items-center mt-6 gap-4">
                <Button variant={'outline'} onClick={handleCancel}>Cancelar</Button>
                <ButtonForm variant={'destructive'} onClick={handleremoveItem}> Eliminar</ButtonForm>
            </div>
        </ModalContent>
    </Modal>
  )
}
