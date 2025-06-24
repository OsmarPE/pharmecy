import { Branch } from "@/lib/types/branch";
import { formatTextSchedule, generateContacts } from "@/lib/utils";
import "leaflet/dist/leaflet.css";
import { Calendar, Map, MapPin, Phone, Route, Smartphone } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "../ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Maps({ branch }: { branch: Branch[] }) {

    const markerRefs = useRef<Array<L.Marker | null>>([])

    const [searchParams] = useSearchParams()
    const index = searchParams.get('index') ? +(searchParams.get('index') as string) : null

    const position: [number, number] = [20.9671, -89.5926]; // Coordenadas de ejemplo (Mérida, Yucatán)

    useEffect(() => {
        if (index === null) return
        console.log(index);
    
        const primerMarker = markerRefs.current[index]
        if (primerMarker) {
            primerMarker.openPopup()
        }
     }, [index])



    return (
        <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
            />
            {branch?.map((item, index) =>{

                const { cel, tel } = generateContacts(item.contact ?? [])

                return  (
                    <Marker ref={(el) => {markerRefs.current[index] = el}} key={index} position={[item.location?.latitude as number, item.location?.longitude as number]}>
                        <Popup minWidth={200} > 
                            <div className="font-primary">
                                <h3 className="text-lg font-medium">{item.name}</h3>
                                <div className="py-2">
                                    <h4 className="font-medium mb-1 flex items-center gap-1 text-primary"><MapPin width={14} />Ubicacion</h4>
                                    <span className="text-sm text-gray-400 block">Calle {item.location?.street } #{item.location?.number} entre {item.location?.betweenStreet} y {item.location?.andBetweenStreet}</span>
                                    <span className="text-sm text-gray-400">{item.location?.colony}</span>
                                    <span className="block text-sm text-gray-400">{item.location?.city}, {item.location?.state} {item.location?.zipCode}.</span>
                                </div>
                                <div className="py-1">
                                    <h4 className="font-medium mb-1 flex items-center gap-2 text-primary"><Phone width={14} />Telefonos</h4>
                                    <span className="text-sm text-gray-400 block">{tel?.join(', ')}</span>
                                </div>
                                <div className="py-1">
                                    <h4 className="font-medium mb-1 flex items-center gap-2 text-primary"><Smartphone width={14} />Celulares</h4>
                                    <span className="text-sm text-gray-400 block">{cel?.join(', ')}</span>
                                </div>
                                <div className="py-1">
                                    <h4 className="font-medium mb-1 flex items-center gap-2 text-primary">   <Calendar width={14} />Horarios</h4>
                                    {
                                        item.schedule?.map((schedule, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                                              <span>{formatTextSchedule({
                                                    dayFrom: schedule.dayFrom,
                                                    dayTo: schedule.dayTo,
                                                    timeIn: schedule.timeIn,
                                                    timeOut: schedule.timeOut
                                                })}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="mt-4 flex items-center gap-4" >
                                    <Button asChild variant={'link'}  style={{color:'var(--color-primary)'}}>
                                        <Link target="_blank" to={`https://www.google.com/maps?saddr=My+Location&daddr=${item.location?.latitude},${item.location?.longitude}`}>
                                        <Route />
                                            Como llegar
                                        </Link>
                                    </Button>
                                     <Button asChild variant={'link'}  style={{color:'var(--color-primary)'}}>
                                        <Link target="_blank" to={`https://www.google.com/maps?q=${item.location?.latitude},${item.location?.longitude}`}>
                                        <Map />
                                            Ver en Google Maps
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}

