from data_preprocessor import DataAnalyzer

def main():
    analizador = DataAnalyzer()

    # 1. Cargar datos
    print("\n--- Cargando datos ---")
    analizador.cargar_datos("datos.csv")
    analizador.mostrar_datos(10)

    # 2. Limpiar datos
    print("\n--- Limpiando datos ---")
    analizador.limpiar_datos()
    analizador.mostrar_datos(10)

    # 3. Análisis
    print("\n--- Análisis de datos ---")
    analizador.resumen()

    # 4. Exportar datos limpios
    print("\n--- Exportando datos limpios ---")
    analizador.exportar_datos("datos_limpios.csv")

if __name__ == "__main__":
    main()
