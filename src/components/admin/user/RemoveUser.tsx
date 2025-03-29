import { Button } from "@/components/ui/button";
import Modal, { ModalContent } from "../Modal";
import ButtonForm from "@/components/components-general/ButtonForm";
import { useIdParams } from "@/hooks/use-idparams";

export default function RemoveUser() {

    const { id, redirect } = useIdParams("removeid")
   if(!id) return null

   const handleremoveItem = () => {
       console.log(id)
       redirect()
   }

  return (
    <Modal defaultState={true} >
        <ModalContent changeOpen={redirect} title="Eliminar usuario" description="¿Estás seguro de que quieres eliminar este usuario?">
            <div className="flex justify-end items-center mt-6 gap-4">
                <Button variant={'outline'} onClick={redirect}>Cancelar</Button>
                <ButtonForm variant={'destructive'} onClick={handleremoveItem}> Eliminar</ButtonForm>
            </div>
        </ModalContent>
    </Modal>
  )
}
