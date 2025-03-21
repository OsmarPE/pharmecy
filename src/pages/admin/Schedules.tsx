import Modal, { ModalButton, ModalContent } from "@/components/admin/Modal";
import FormSchedule from "@/components/admin/schedules/FormSchedule";
import ScheduleCard from "@/components/admin/schedules/ScheduleCard";
import { CirclePlus } from "lucide-react";

export default function Schedules() {
  return (
    <div className="max-w-5xl">
      <header className=" mb-4">
          <h1 className="font-medium text-xl">Horarios</h1>
          <p className="text-gray-400 text-sm">
            Aquí podrás gestionar todas las horarios de tu negocio. Puedes crear, editar y eliminar horarios.
          </p>
      </header>
      <div className="flex justify-end">
        <Modal>
          <ModalButton variant="notion"> <CirclePlus /> Agregar</ModalButton>
          <ModalContent title="Agregar Horario" description="Crea un nuevo horario para una sucursal">
            <FormSchedule />
          </ModalContent>
        </Modal>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />

        </div>
      </div>
    </div>
  )
}
