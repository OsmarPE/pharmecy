import ButtonForm from "@/components/components-general/ButtonForm"
import InputForm from "@/components/components-general/InputForm"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { userValidationSchema } from "@/validation/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Modal, { ModalContent } from "../Modal"
import { useIdParams } from "@/hooks/use-idparams"


export default function EditUser() {

    const { id, redirect } = useIdParams("editid")
    

    const form = useForm<z.infer<typeof userValidationSchema>>({
        resolver: zodResolver(userValidationSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    useEffect(() => {
        
        form.setValue("name", "Osmar")
        form.setValue("email", "osmar@gmail.com")
        form.setValue("password", "123456")
    
    }, [])
    
    
    
    const onSubmit = (data: z.infer<typeof userValidationSchema>) => {
        console.log(data)
    }


    return (
        <Modal defaultState={true}>
            <ModalContent changeOpen={redirect} title="Agregar Usuario" description="Crea un nuevo usuario">
          <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <InputForm label="Nombre" name="name" control={form.control} placeholder="Usuario" />
                        <InputForm label="Email" name="email" control={form.control} placeholder="exemplo@gmail.com" />
                        <InputForm label="Contraseña" name="password" control={form.control} placeholder="••••••••" />
                    </div>
                    <div className="flex justify-end items-center mt-6 gap-4">
                        <Button type="button" variant="outline" onClick={redirect}>Cancelar</Button>
                        <ButtonForm type="submit">Agregar</ButtonForm>
                    </div>
                </form>
            </Form>
          </div>
        </ModalContent>
      </Modal>
    )
}
