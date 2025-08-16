import pandas as pd

class DataPreprocessor:
    def __init__(self):
        self.df = None

    def cargar_datos(self, ruta: str):
        """Carga un archivo CSV en un DataFrame de Pandas."""
        try:
            # Agregado encoding para evitar problemas con tildes y ñ
            self.df = pd.read_csv(ruta, encoding="utf-8")
            print("Datos cargados correctamente.")
        except FileNotFoundError:
            print("Archivo no encontrado.")

    def limpiar_datos(self):
        """Elimina filas con valores nulos y duplicados."""
        if self.df is not None:
            filas_antes = len(self.df)
            self.df.dropna(inplace=True)
            self.df.drop_duplicates(inplace=True)
            filas_despues = len(self.df)
            print(f"Datos limpiados. Filas eliminadas: {filas_antes - filas_despues}")
        else:
            print("No hay datos cargados para limpiar.")

    def exportar_datos(self, ruta: str):
        """Exporta el DataFrame limpio a un archivo CSV."""
        if self.df is not None:
            self.df.to_csv(ruta, index=False, encoding="utf-8")  #  también con encoding
            print(f"Datos exportados a {ruta}")
        else:
            print("No hay datos para exportar.")


class DataAnalyzer(DataPreprocessor):
    def resumen(self):
        """Muestra estadísticas básicas del DataFrame."""
        if self.df is not None:
            print("Resumen estadístico de variables numéricas:")
            print(self.df.describe().T[["mean", "min", "max"]])
        else:
            print("No hay datos cargados para analizar.")

    def mostrar_datos(self, n=5):
        """Muestra las primeras n filas del DataFrame."""
        if self.df is not None:
            print(f"Mostrando las primeras {n} filas:")
            print(self.df.head(n))
        else:
            print("No hay datos cargados para mostrar.")
