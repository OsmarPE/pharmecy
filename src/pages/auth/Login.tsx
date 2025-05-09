import Container from "@/components/Container";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {  Shield } from "lucide-react";
import { validationLogin } from "@/validation/auth";
import InputForm from "@/components/components-general/InputForm";
import { login } from "@/services/user.services";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  
  if (token) return <Navigate to="/admin" replace/>
  
  const form = useForm<z.infer<typeof validationLogin>>({
    resolver: zodResolver(validationLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  async function onSubmit(values: z.infer<typeof validationLogin>) {

    try {
      const data = await login(values.email, values.password)
      localStorage.setItem('token', data.token)
      navigate('/admin',{replace: true})

    } catch (error) {
            
    }

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
