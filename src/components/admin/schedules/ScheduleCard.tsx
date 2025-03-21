import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function ScheduleCard() {
    return (
        <article className="border border-gray-200 rounded-lg p-4 bg-white shadow">
            <header className="pb-3 flex justify-between gap-4">
                <div>
                    <h4 className="text-sm text-gray-400">Sucursal</h4>
                    <p className="font-medium">Oficina Central</p>
                </div>
                <div>
                    <Button  variant={'outline'} size={'icon'}> 
                        <Pencil width={14} height={14} />
                    </Button>
                </div>
            </header>

            <div className="border-t border-gray-200 pt-3 grid gap-2">

                <div className="flex gap-6">
                    <div className="">
                        <span className="text-sm text-gray-400">Horario de la semana</span>
                        <p className="font-medium">Lunes a Viernes</p>
                    </div>
                    <div className="">
                        <span className="text-sm text-gray-400">Hora de inicio</span>
                        <p className="font-medium">10:00 AM</p>
                    </div>
                    <div className="">
                        <span className="text-sm text-gray-400">Hora de fin</span>
                        <p className="font-medium">7:00 PM</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="">
                        <span className="text-sm text-gray-400">Horario de la semana</span>
                        <p className="font-medium">Domingo</p>
                    </div>
                    <div className="">
                        <span className="text-sm text-gray-400">Hora de inicio</span>
                        <p className="font-medium">10:00 AM</p>
                    </div>
                    <div className="">
                        <span className="text-sm text-gray-400">Hora de fin</span>
                        <p className="font-medium">7:00 PM</p>
                    </div>
                </div>

            </div>
        </article>
    )
}
