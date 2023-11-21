"use client";
import Head from "next/head";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Head>
        <title>ReciclaMack - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        bgcolor={"primary.main"}
        color={"black"}
        width={"100%"}
        height={{ xl: 500, md: 400, xs: "100%" }}
        overflow={"hidden"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src="Ativos_Recicla_Mack/banner2.png"
          alt="Descrição da imagem"
          width={"100%"}
          //sx={{ opacity: 0.6 }}
        />
      </Box>
      <Box
        bgcolor={"primary.main"}
        color={"white"}
        width={"100%"}
        height={{ md: 420, xs: "100%" }}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box ml={10} mr={10} pt={{ md: 0, xs: 5 }} pb={{ md: 0, xs: 5 }}>
          <Typography
            variant={"h4"}
            marginBottom={4}
            sx={{ fontWeight: "bold" }}
          >
            O que devemos reciclar?
          </Typography>
          <Grid container>
            <Grid item xs>
              <Typography variant={"h5"} fontWeight={"bold"} marginBottom={2}>
                Quais materiais podem ser reciclados?
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0}>
               Uma ampla variedade de equipamentos que um dia foram alimentados 
                por energia elétrica, pilhas ou baterias. Isso inclui não apenas os
                dispositivos principais, mas também os fios, acessórios e todas as
                suas partes associadas. Desde aparelhos eletrônicos até ferramentas
                elétricas, do menor fio ao componente mais específico, estamos prontos
                para receber tudo o que já desempenhou seu papel na produção de energia
                ou entretenimento. Faça parte do movimento sustentável, contribuindo 
                para o descarte responsável desses itens e promovendo um ambiente
                mais limpo e saudável para todos.
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              color="white"
              flexItem
              sx={{ ml: 2, mr: 2, width: 3 }}
            />
            <Grid item xs>
              <Typography variant={"h5"} fontWeight={"bold"} marginBottom={2}>
                Como descartar os não recicláveis?
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0}>
                Descartar corretamente os materiais não recicláveis é crucial para 
                  preservar o meio ambiente e garantir a segurança de todos. Para itens como 
                  geladeiras, freezers, frigobares, aparelhos de ar condicionado, bebedouros 
                  que refrigeram, TVs e monitores de tubo, cartuchos de impressora, toners, 
                  fitas magnéticas (VHS, K7, disquetes), pilhas, baterias inchadas, fibras 
                  óticas e lâmpadas, existem métodos específicos e locais designados para o 
                  descarte seguro.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        color={"black"}
        width={"100%"}
        height={"100%"}
        pt={6}
        pb={6}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }} // define a direção dos itens (vertical para telas pequenas e horizontal para telas médias e acima)
        alignItems={"center"} // centraliza no eixo Y
        justifyContent={"center"} // centraliza no eixo X
      >
        <Box ml={10} mr={10}>
          <Typography variant={"h4"} marginBottom={4}>
            Como devemos reciclar
          </Typography>
          <Typography variant={"h5"} fontWeight={"bold"} marginBottom={4}>
            Como se dá o processo de reciclagem?
          </Typography>
          <Grid container>
            <Grid item xs>
              <Typography variant={"h5"} marginBottom={2}>
                1° Coleta e Triagem
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
               A primeira fase envolve a coleta de lixo eletrônico de consumidores, empresas e outros geradores. 
                Isso pode ser feito por meio de pontos de coleta designados, eventos de reciclagem ou serviços de 
                coleta especializados. Após a coleta, os itens são triados para separar aqueles que podem ser reciclados 
                daqueles que precisam de disposição especial. Isso geralmente é feito manualmente ou por meio de 
                processos automatizados.
              </Typography>
              <Typography variant={"h5"} marginBottom={2}>
                2. Desmontagem e Recuperação de Componentes Valiosos:
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
              Os dispositivos eletrônicos são desmontados para separar diferentes componentes. Isso pode envolver a 
                remoção de placas de circuito, fios, baterias e outros elementos. Nesta fase, são recuperados materiais 
                valiosos, como metais preciosos (ouro, prata, cobre), plásticos, vidro e outros materiais reutilizáveis.
                Isso é frequentemente feito por meio de processos de trituração, moagem e separação.
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              color="black"
              flexItem
              sx={{ ml: 5, mr: 6, width: 2 }}
            />
            <Grid
              item
              xs
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="Ativos_Recicla_Mack/banner2.png"
                alt="Descrição da imagem"
                width={"100%"}
                borderRadius={3}
                //sx={{ opacity: 0.6 }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src="Ativos_Recicla_Mack/banner2.png"
                alt="Descrição da imagem"
                width={"100%"}
                borderRadius={3}
                //sx={{ opacity: 0.6 }}
              />
            </Grid>
            <Divider
              orientation="vertical"
              variant="middle"
              color="black"
              flexItem
              sx={{ ml: 2, mr: 8, width: 2 }}
            />
            <Grid item xs>
              <Typography variant={"h5"} marginBottom={2}>
               3. Tratamento de Substâncias Tóxicas:
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
                Dispositivos eletrônicos muitas vezes contêm substâncias perigosas, como mercúrio, chumbo e cádmio.
                  Essas substâncias são tratadas de maneira segura para evitar a contaminação ambiental. 
                  Por exemplo, as baterias podem ser separadas e enviadas para instalações especializadas de tratamento.
              </Typography>
              <Typography variant={"h5"} marginBottom={2}>
                4. Recondicionamento ou Reutilização:
              </Typography>
              <Typography marginBottom={isMobile ? 2 : 0} ml={isMobile ? 2 : 8}>
               Quando possível, alguns dispositivos eletrônicos podem ser recondicionados e reutilizados. 
              Isso é uma forma eficaz de estender a vida útil dos produtos e reduzir a demanda por novos materiais.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
