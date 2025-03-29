import ButtonForm from "@/components/components-general/ButtonForm"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useModal } from "@/hooks/use-modal"
import { bannerValidationSchema } from "@/validation/banner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import DragImageInput from "../drag-and-drop/DragImageInput"


export default function FormBanner() {

    const { closeModal } = useModal()

    const form = useForm<z.infer<typeof bannerValidationSchema>>({
        resolver: zodResolver(bannerValidationSchema),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = (data: z.infer<typeof bannerValidationSchema>) => {
        const formData = new FormData();
        formData.append("file", data.name);
        closeModal();
        
        // fetch("http://localhost:3000/api/banner", {
        //     method: "POST",
        //     body: formData
        // })
    }


    const {  errors } = form.formState

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <DragImageInput 
                    message={errors?.name?.message}
                    onChangeValue={(value) => form.setValue("name", value)}
                />
                <div className="flex justify-end items-center mt-6 gap-4">
                    <Button type="button" variant="outline" onClick={closeModal}>Cancelar</Button>
                    <ButtonForm type="submit">Agregar</ButtonForm>
                </div>
            </form>
        </Form>
    )
}
