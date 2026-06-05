from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

parqueaderos_db = [
    {"id": 1, "nombre": "Parking Centro", "direccion": "Cra 7 #12-35", "espaciosDisponibles": 10, "espaciosTotales": 50, "tipo": "Cubierto", "tarifa": 3000},
    {"id": 2, "nombre": "Parking Chapinero", "direccion": "Calle 63 #10-20", "espaciosDisponibles": 5, "espaciosTotales": 30, "tipo": "Descubierto", "tarifa": 2500},
    {"id": 3, "nombre": "Parking Salitre", "direccion": "Av El Dorado #68-50", "espaciosDisponibles": 20, "espaciosTotales": 100, "tipo": "Cubierto", "tarifa": 4000},
    {"id": 4, "nombre": "Parking Usaquén", "direccion": "Calle 119 #15-10", "espaciosDisponibles": 0, "espaciosTotales": 20, "tipo": "Cubierto", "tarifa": 3500},
    {"id": 5, "nombre": "Parking Kennedy", "direccion": "Cra 80 #38-15", "espaciosDisponibles": 15, "espaciosTotales": 40, "tipo": "Descubierto", "tarifa": 2000},
]

@app.get("/api/parqueaderos")
def obtener_parqueaderos():
    return parqueaderos_db
