import flet as ft
from pytube import YouTube

#ytVideo = YouTube()

def main(page: ft.Page):
    page.title = "Flet counter example"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER

    #Definindo os elementos na pagina    
    txt_input_name = ft.TextField(label="Video link", value="",text_align=ft.TextAlign.LEFT, width=500)
    txt_button = ft.ElevatedButton("Baixar", on_click=youtube_downloader)
    txt_message = ft.Text("Coloque o link do video que deseja baixar")

    #Definindo as funções
    def youtube_downloader(e):
        #ytVideo = YouTube(txt_input_name.value)
        print("Clicou no botao")

    # personalizando a pagina
    page.add(
        ft.Row(
            [
                
                txt_input_name,
                txt_button,
                
            ],
            
            alignment=ft.MainAxisAlignment.CENTER,
        )
    )

ft.app(target=main)