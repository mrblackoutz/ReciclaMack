"use client";
import { Box, useMediaQuery, Typography } from "@mui/material";
import Evento from "./evento";
import Outros from "./outrosItens";

export default function(){
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={{md:"flex-start"}}
            justifyContent={"center"}
        >
            <Box paddingX={{xs:"0.5rem",md:"10rem"}}>
            <Typography fontWeight={"1000"} fontSize={{xs:"1.5rem",md:"2rem"}} paddingTop={{xs:"1rem"}}>Eventos</Typography>
                <Evento id= {1}
                    titulo= "Evento 1"
                    data= "03/10/2021"
                    local= "R. da Consolação, 930"
                    hora= "00:00"
                    descricao= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    imagem= "Ativos_Recicla_Mack/imagem-tunel.png"
                />
                <Evento id= {2}
                    titulo= "Evento 2"
                    data= "03/10/2021"
                    local= "R. da Consolação, 930"
                    hora= "00:00"
                    descricao= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    imagem= "Ativos_Recicla_Mack/imagem-gincana.png"
                />
                <Evento id= {3}
                    titulo= "Evento 3"
                    data= "03/10/2021"
                    local= "R. da Consolação, 930"
                    hora= "00:00"
                    descricao= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    imagem= "Ativos_Recicla_Mack/imagem-exposicao.png"
                />
            </Box>
            <Box bgcolor={"#00B59F"} 
                height={"fit-content"}
                paddingX={{xs:"0.5rem", md:"10rem"}}
                paddingBottom={{xs:"2rem"}}
            >
                <Typography fontWeight="1000" color="#fff" fontSize={{xs:"1.5rem", md:"2rem"}} marginY={{xs:"2rem"}}>Vídeo/Animação</Typography>
                <Outros id= {5}
                    titulo= "video 1"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    imagem= "Ativos_Recicla_Mack/imagem-icone-video.png"
                    buttonbg= "#10B14A"
                />
            </Box>
            <Box bgcolor={"#10B14A"} 
                height={"fit-content"}
                paddingX={{xs:"0.5rem", md:"10rem"}}
                paddingBottom={{xs:"2rem"}}
            >
                <Typography fontWeight="1000" color="#fff" fontSize={{xs:"1.5rem", md:"2rem"}} marginY={{xs:"2rem"}}>Jogo/Animação</Typography>
                <Outros id= {6}
                    titulo= "Jogo 1"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    imagem= "Ativos_Recicla_Mack/imagem-icone-jogo.png"
                    buttonbg= "#00844D"
                />
            </Box>
            <Box bgcolor={"#00844D"} 
                height={"fit-content"}
                paddingX={{xs:"0.5rem", md:"10rem"}}
                paddingY={{xs:"2rem"}}
            >
                <Outros id= {7}
                    titulo= "App coleta local"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                    imagem= "Ativos_Recicla_Mack/imagem-icone-app.png"
                    buttonbg= "#00B59F"
                />
            </Box>
        </Box>
    )
}