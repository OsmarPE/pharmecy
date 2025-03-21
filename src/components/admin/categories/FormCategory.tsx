import ButtonForm from "@/components/components-general/ButtonForm"
import InputForm from "@/components/components-general/InputForm"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useModal } from "@/hooks/use-modal"
import { categoriesValidationSchema } from "@/validation/categories"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


export default function FormCategory() {

    const {  closeModal } = useModal()

    const form = useForm<z.infer<typeof categoriesValidationSchema>>({
        resolver: zodResolver(categoriesValidationSchema),
        defaultValues: {
            name: "",
        },
    })
    
    const onSubmit = (data: z.infer<typeof categoriesValidationSchema>) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <InputForm label="Nombre" name="name" control={form.control} placeholder="Nombre de la categoría" />
                <div className="flex justify-end items-center mt-6 gap-4">
                    <Button type="button" variant="outline" onClick={closeModal}>Cancelar</Button>
                    <ButtonForm type="submit">Agregar</ButtonForm>
                </div>
            </form>
        </Form>
    )
}
