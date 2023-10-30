"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";

const Estudantes = () => {
  return (
    <Box ml={4} mr={4}>
      <Box
        borderRadius={"10px 10px 0px 0px"} // deixa os cantos arredondados, mas somente o canto superior direito e esquerdo
        height={"150px"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        bgcolor={"#00844D"}
      >
        <Image
          sx={{
            width: { md: "auto" },
            height: { md: 70 },
          }}
          src="Ativos_Recicla_Mack/icone-imagem-duas-peassoas.png"
          alt="Circuitos"
        />
      </Box>
      <Box
        height={"200px"}
        width={"100%"}
        bgcolor={"primary.main"}
        borderRadius={"0px 0px 10px 10px"}
        pt={4}
        pl={2}
        pr={2}
        color={"white"}
      >
        <Typography variant={"body1"} fontWeight={"bold"}>
          Nomes:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Curso:{" "}
          <Typography variant={"body1"} component={"span"}>
            Ciências da computação
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Região:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

const Objetivo = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={"30%"}
      justifyContent={"center"}
    >
      <Image
        sx={{
          width: { md: "40%" },
        }}
        src="Ativos_Recicla_Mack/imagem-lixo.png"
        alt="Circuitos"
      />
      <Typography variant={"h5"}>
        Objetivo
      </Typography>
      <Typography variant={"body1"} textAlign={"center"} mt={4}>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica.
      </Typography>
    </Box>
  );
}

const Testemunhos = () => {
  return (
    <Box
      bgcolor={"white"}
      width={"330px"}
      height={"130px"}
      borderRadius={2}
      ml={2}
      mr={2}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Image
        sx={{
          width: { md: 80 },
          alignItems: "center",
        }}
        src="Ativos_Recicla_Mack/imagem-lixo.png"
        alt="Circuitos"
      />
      <Box>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Nomes:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Data:{" "}
          <Typography variant={"body1"} component={"span"}>
            dd/MM/YYYY
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"} mt={2}>
          Comentário:{" "}
          <Typography variant={"body1"} component={"span"}>
            Gosto muito do trabalho de vocês
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

const Usuarios = () => {
  return (
    <Box
      bgcolor={"primary.main"}
      width={"330px"}
      height={"130px"}
      borderRadius={2}
      ml={2}
      mr={2}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <Image
        sx={{
          width: { md: 80 },
          alignItems: "center",
        }}
        src="Ativos_Recicla_Mack/imagem-lixo.png"
        alt="Circuitos"
      />
      <Box>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Nomes:{" "}
          <Typography variant={"body1"} component={"span"}>
            Fulano de tal
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"}>
          Data:{" "}
          <Typography variant={"body1"} component={"span"}>
            dd/MM/YYYY
          </Typography>
        </Typography>
        <Typography variant={"body1"} fontWeight={"bold"} mt={2}>
          Comentário:{" "}
          <Typography variant={"body1"} component={"span"}>
            Gosto muito do trabalho de vocês
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Box
        bgcolor={"primary.main"}
        color={"black"}
        width={"100%"}
        height={{ md: 400, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mb={5}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Apoio Institucional
          </Typography>
        </Box>
        <Box ml={10} mr={10}>
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
          <Image
            sx={{
              width: { md: 80 },
              alignItems: "center",
            }}
            src="Ativos_Recicla_Mack/imagem-lixo.png"
            alt="Circuitos"
          />
        </Box>
      </Box>

      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={{ md: 420, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mb={5}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Objetivos e metas
          </Typography>
        </Box>
        <Box ml={20} mr={20} display={"flex"} justifyContent={"space-between"}>
          <Objetivo />
          <Objetivo />
          <Objetivo />
        </Box>
      </Box>
      <Box
        bgcolor={"#10B14A"}
        color={"black"}
        width={"100%"}
        height={{ md: 600, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mr={10} mt={7} mb={5}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
            color={"white"}
          >
            Estudantes parceiros
          </Typography>
        </Box>
        <Box
          ml={10}
          mr={10}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          flexGrow={1}
        >
          <Estudantes />
          <Estudantes />
          <Estudantes />
        </Box>
      </Box>
      <Box
        bgcolor={"#00844D"}
        color={"black"}
        width={"100%"}
        height={{ md: 400, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mr={10} mt={7} mb={1}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
            color={"white"}
          >
            Testemunhos
          </Typography>
        </Box>
        <Typography
          variant={"h5"}
          fontWeight={"bold"}
          textAlign={"left"}
          color={"white"}
          ml={12}
          mr={12}
          mb={5}
        >
          Colaboradores
        </Typography>
        <Box
          ml={10}
          mr={10}
          display={"flex"}
          flexDirection={"row"}
          flexGrow={1}
        >
          <Testemunhos />
          <Testemunhos />
          <Testemunhos />
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={{ md: 400, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        justifyContent={"center"}
      >
        <Box ml={10} mr={10} mt={7} mb={1}>
          <Typography
            variant={"h4"}
            margin={2}
            fontWeight={"bold"}
            textAlign={"left"}
          >
            Usuários
          </Typography>
        </Box>
        <Box
          ml={10}
          mr={10}
          display={"flex"}
          flexDirection={"row"}
          flexGrow={1}
        >
          <Usuarios />
          <Usuarios />
          <Usuarios />
        </Box>
      </Box>
    </div>
  );
};
