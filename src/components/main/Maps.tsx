import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

export default function Maps() {

    const [positionCurrent, setPositionCurrent] = useState<LatLng | null>(null);

    const locations = [
        { name: "Mérida, Yucatán", position: [20.9671, -89.5926], info: "Capital de Yucatán, famosa por su cultura y gastronomía." },
        { name: "Cancún, Quintana Roo", position: [21.1619, -86.8515], info: "Destino turístico con playas paradisíacas." },
    ];


    const position: [number, number] = [20.9671, -89.5926]; // Coordenadas de ejemplo (Mérida, Yucatán)

    return (
        <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
            />
           {/* { positionCurrent && <Marker
                position={positionCurrent}
                draggable={true}
                eventHandlers={{
                    dragend: (event) => setPositionCurrent(event.target.getLatLng()), // Guarda la nueva posición cuando se arrastra
                }}
            ></Marker>} */}
            <EvenMaps setPositionCurrent={setPositionCurrent} />
            {locations.map((loc, index) => (
                <Marker key={index} position={loc.position as [number, number]}>
                    <Popup>
                        <strong>{loc.name}</strong>
                        <br />
                        {loc.info}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}


function EvenMaps({ setPositionCurrent }: { setPositionCurrent: any }) {
    useMapEvents({
        click(event) {
            setPositionCurrent(event.latlng); // Guarda la nueva posición
        },
    });

    return null;
}