import { Box, Typography } from "@mui/material";
import { Image } from "../../components/Image";

export default function Evento(props) {
    let lado = "row";
    props.id % 2 == 1 ? lado = "row" : lado = "row-reverse";
    return (
        <Box
            id={props.id}
            display={"flex"}
            flexDirection={lado}
            alignItems={"center"}
            height={{xs:"40vh", md:"50vh"}}

        >
            <Box
                width={{md:"50%"}}
                display={"flex"}
                flexDirection={"column"}
            >
                <Typography fontWeight={"1000"} fontSize={{xs:"1.5rem",md:"2rem"}} marginBottom={{xs:".3rem"}}>{props.titulo}</Typography>
                <Typography margin= "0" fontSize={{xs:"0.8rem", md: "1rem"}}><b>data:</b> {props.data}</Typography>
                <Typography margin= "0" fontSize={{xs:"0.8rem", md: "1rem"}}><b>hora:</b> {props.hora}</Typography>
                <Typography margin= "0" fontSize={{xs:"0.8rem", md: "1rem"}}><b>local:</b> {props.local}</Typography>
                <Typography fontSize={{xs:"0.8rem", md: "1rem"}} marginTop={{xs:".3rem"}}><b>descrição:</b> {props.descricao}</Typography>
            </Box>
            <Box width={{xs:"10vw", md:"10%"}}></Box>
            <Image src={props.imagem} alt={props.titulo}
                width= {{xs:"50vw", md:"50%"}}
                objectFit= "cover"
                borderRadius= "1rem"
                height= {{xs:"25vh", md:"40vh"}}
            />
        </Box>

    )
}