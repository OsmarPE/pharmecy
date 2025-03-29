import ButtonForm from "@/components/components-general/ButtonForm"
import InputForm from "@/components/components-general/InputForm"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useIdParams } from "@/hooks/use-idparams"
import { categoriesValidationSchema } from "@/validation/categories"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Modal, { ModalContent } from "../Modal"
import { useEffect } from "react"


export default function EditCategory() {

    const { id, redirect } = useIdParams("editid")

    const form = useForm<z.infer<typeof categoriesValidationSchema>>({
        resolver: zodResolver(categoriesValidationSchema),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = (data: z.infer<typeof categoriesValidationSchema>) => {
        console.log(data)
    }

    useEffect(() => {
        form.setValue("name", "Osmar")
    
    }, [])


    return (
        <Modal defaultState={true}>
            <ModalContent changeOpen={redirect} title="Editar Rol" description="editar el rol">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <InputForm label="Nombre" name="name" control={form.control} placeholder="Nombre de la categoría" />
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
