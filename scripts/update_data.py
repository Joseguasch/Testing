import json
from datetime import datetime

data = [
    {"proyecto": "Atlas", "estado": "Activo", "avance": 82},
    {"proyecto": "Orion", "estado": "Riesgo", "avance": 48},
    {"proyecto": "Nimbus", "estado": "Activo", "avance": 93},
    {"proyecto": "Aurora", "estado": "Activo", "avance": 75}
]

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Datos actualizados:", datetime.now())
