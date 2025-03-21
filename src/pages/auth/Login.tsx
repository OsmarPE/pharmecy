import Container from "@/components/Container";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form";
import { z } from 'zod'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Shield } from "lucide-react";
import { validationLogin } from "@/validation/auth";
import InputForm from "@/components/components-general/InputForm";

 
export default function Login() {

  const form = useForm<z.infer<typeof validationLogin>>({
    resolver: zodResolver(validationLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  function onSubmit(values: z.infer<typeof validationLogin>) {

    console.log(values)
  }

  return (
    <Container className="flex items-center justify-center h-screen">
      <div className=" max-w-xs w-full">
        <div className="size-12 mx-auto grid place-content-center bg-primary text-white rounded-full mb-4">
        <Shield width={22}/>
        </div>
        <header className="text-center mb-10">
          <h1 className="font-semibold text-2xl ">Bienvenido</h1>
          <p className="text-gray-500 text-sm font-light">ingrese tus datos para iniciar sesión</p>
        </header>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div className="">
                <InputForm control={form.control} placeholder="Correo electronico" name="email" label="Correo electronico" />
              </div>
              <div className="">
                <InputForm control={form.control} placeholder="Contraseña" name="password" label="Contraseña" />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              Iniciar sesión
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  )
}
