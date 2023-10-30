'use client'
import { Box, Typography } from "@mui/material";
import { Image } from "../../components/Image";

export default () => {
  return (
    <div>
      <Box
        color={"#FFF"}
        display={"flex"}
        flexDirection={"column"}
        padding={"2rem"}
        bgcolor={"#00844D"}
        width={"100%"}
        height={"90vh"}
        justifyContent={"space-between"}
      >
        <h1>Como separar os materiais de coleta?</h1>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          paddingBottom={"7rem"}
        >
          <Box display={"flex"} flexDirection={"column"} paddingRight={"1rem"}>
            <Box>
              <h2>1° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
            <Box>
              <h2>2° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
          </Box>

          <Image
            src="Ativos_Recicla_Mack/image 51.png"
            style={{
              width: "30vw",
              height: "55vh",
            }}
          />

          <Box display={"flex"} flexDirection={"column"} padding={"1rem"}>
            <Box>
              <h2>3° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
            <Box>
              <h2>4° Etapa</h2>
              <Typography fontSize={".8rem"} style={{ width: "25vw" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        color={"#FFF"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        padding={"2rem"}
        bgcolor={"#10B14A"}
        height={"90vh"}
        width={"100%"}
      >
        <Box display={"flex"} flexDirection={"column"} width={"50%"}>
          <h1>Onde posso realizar o descarte?</h1>
          <h2>Pontos de coleta</h2>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            {/* talvez coloxar esses componentes como buttons para poder disparar evento com o 
                        JavaScript e mudar a localização dos pontos de coleta */}
            <Box
              bgcolor={"#00844D"}
              width={"5rem"}
              borderRadius={"10px"}
              textAlign={"center"}
            >
              <p>PDC-1</p>
            </Box>
            <Box
              bgcolor={"#00844D"}
              width={"5rem"}
              borderRadius={"10px"}
              textAlign={"center"}
            >
              <p>PDC-2</p>
            </Box>
            <Box
              bgcolor={"#00844D"}
              width={"5rem"}
              borderRadius={"10px"}
              textAlign={"center"}
            >
              <p>PDC-3</p>
            </Box>
            <Box
              bgcolor={"#00844D"}
              width={"5rem"}
              borderRadius={"10px"}
              textAlign={"center"}
            >
              <p>PDC-4</p>
            </Box>
          </Box>
          <Box>
            <h3>Locais - ponto de coleta n° 439</h3>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica.
            </p>
          </Box>
        </Box>
        <Box
        // width={"50%"}
        // display={"flex"}
        // alignItems={"center"}
        // justifyContent={"center"}
        >
          <Image
            src="Ativos_Recicla_Mack/imagem-ponto-coleta.png"
            //  style={{ width: "75%", height: "60%",}}
            style={{ width: "40vw", height: "60vh" }}
          />
        </Box>
      </Box>
    </div>
  );
};
