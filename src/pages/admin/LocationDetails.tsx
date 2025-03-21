import InputForm from "@/components/components-general/InputForm";
import SelectForm from "@/components/components-general/SelectForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { timeOptions } from "@/lib/helper";
import { ArrowLeft, Clock, Locate, MapPin, Navigation, Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function LocationDetails() {

    const [addLocation, setaddLocation] = useState(false);

    const form = useForm({
        defaultValues: {
            name: '',
        },
    });

    return (
        <div>
            <Button variant={'notion'} className="mb-6" asChild>
                <Link to={'/admin/locations'}>
                    <ArrowLeft width={16} height={16} />
                </Link>
            </Button>
            <div className="p-8 border border-gray-400/30 max-w-7xl rounded-lg shadow">
                <div>
                    <h1 className="font-semibold text-xl ">Añadir nueva sucursal</h1>
                    <p className="text-gray-400 text-sm">Llene los campos con los datos de la sucursal</p>
                </div>
                <Form {...form}>
                    <form>
                        <div  className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <div className="mb-4">
                                    <h2 className="font-medium flex items-center gap-2"> <Locate width={16} height={16} /> Direccion</h2>
                                    <p className="text-gray-400 text-sm">Añada informacion de la sucursal</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-4 gap-4">
                                        <InputForm label="Calle" placeholder="77A" control={form.control} name="street" type="text" />
                                        <InputForm label="Numero" placeholder="108" control={form.control} name="number" type="text" />
                                        <InputForm label="Entre calle" placeholder="55" control={form.control} name="name" type="text" />
                                        <InputForm label="Y calle" placeholder="55A" control={form.control} name="name" type="text" />
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        <InputForm label="Ciudad" placeholder="Madrid" control={form.control} name="name" type="text" />
                                        <InputForm label="Estado" placeholder="Madrid" control={form.control} name="name" type="text" />
                                        <InputForm label="Colonia" placeholder="Madrid" control={form.control} name="name" type="text" />
                                        <InputForm label="Codigo Postal" placeholder="28001" control={form.control} name="name" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-medium flex items-center gap-2"> <MapPin width={16} height={16} /> Mapa</h2>
                                <p className="text-gray-400 text-sm">Selecciona la ubicación donde se ubica la sucursal</p>
                                <div></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 justify-between">
                                    <div>
                                        <h2 className="font-medium flex items-center gap-2"> <Clock width={16} height={16} /> Horario</h2>
                                        <p className="text-sm text-gray-400">Añade un horario para la sucursal</p>
                                    </div>
                                    {!addLocation ? <Button type="button" onClick={() => setaddLocation(true)} variant={'outline'} size={'icon'} className="" >
                                        <Plus width={16} height={16} />
                                    </Button> : (
                                        <Button type="button" onClick={() => setaddLocation(false)} variant={'outline'} className="" >
                                            Cancelar
                                        </Button>
                                    )}
                                </div>
                                {addLocation && (
                                    <div className="space-y-4 mt-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <SelectForm label="Dia de la semana" placeholder="Selecciona el horario" control={form.control} name="nu">
                                                <SelectItem value="1">Lunes</SelectItem>
                                                <SelectItem value="2">Martes</SelectItem>
                                                <SelectItem value="3">Miércoles</SelectItem>
                                                <SelectItem value="4">Jueves</SelectItem>
                                                <SelectItem value="5">Viernes</SelectItem>
                                            </SelectForm>
                                            <SelectForm label="Dia de la semana final" placeholder="Selecciona el horario" control={form.control} name="nu">
                                                <SelectItem value="1">Lunes</SelectItem>
                                                <SelectItem value="2">Martes</SelectItem>
                                                <SelectItem value="3">Miércoles</SelectItem>
                                                <SelectItem value="4">Jueves</SelectItem>
                                                <SelectItem value="5">Viernes</SelectItem>
                                            </SelectForm>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 ">
                                            <SelectForm label="Hora inicial" placeholder="Selecciona la hora inicial" control={form.control} name="nu">
                                                {
                                                    timeOptions.map((time, index) => (
                                                        <SelectItem key={index} value={time}>{time}</SelectItem>
                                                    ))
                                                }

                                            </SelectForm>
                                            <SelectForm label="Hora final" placeholder="Selecciona el horario" control={form.control} name="nu">
                                                {
                                                    timeOptions.map((time, index) => (
                                                        <SelectItem key={index} value={time}>{time}</SelectItem>
                                                    ))
                                                }
                                            </SelectForm>
                                        </div>
                                        <Button type="button" variant={'outline'} className="mt-4 ml-auto flex">
                                            <Plus width={16} height={16} />
                                            Agregar
                                        </Button>
                                    </div>
                                )}

                                <div className="mt-4">
                                    <div className="flex gap-8 py-4 border-t border-dashed border-gray-200 last-of-type:border-b ">
                                        <div>
                                            <p className="text-sm text-gray-400">Dia de la semana</p>
                                            <p className="font-medium">Lunes</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Dia de la semana final</p>
                                            <p className="font-medium">Lunes</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Hora inicial</p>
                                            <p className="font-medium">12:00</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Hora final</p>
                                            <p className="font-medium">12:00</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-8 py-4 border-t border-dashed border-gray-200 last-of-type:border-b ">
                                        <div>
                                            <p className="text-sm text-gray-400">Dia de la semana</p>
                                            <p className="font-medium">Lunes</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Dia de la semana final</p>
                                            <p className="font-medium">Lunes</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Hora inicial</p>
                                            <p className="font-medium">12:00</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Hora final</p>
                                            <p className="font-medium">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <Button type="submit" variant={'outline'} className="mt-4 ml-auto flex">
                            <Plus width={16} height={16} />
                            Agregar
                        </Button>
                    </form>
                </Form>

            </div>
        </div>
    )
}
