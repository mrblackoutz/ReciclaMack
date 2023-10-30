import { Box, Typography, useMediaQuery } from "@mui/material";
import { Image } from "../../components/Image";
import { Button } from "../../components/Button";

export default function Outros(props) {
    let lado = "row";
    props.id % 2 == 1 ? lado = "row" : lado = "row-reverse";
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box
            id={props.id}
            display={"flex"}
            flexDirection={{xs:"column", md:lado}}
            alignItems={"center"}
            color={"#fff"}
        >
            {isMobile? <Typography fontSize="1.5rem" fontWeight="1000" alignSelf="baseline">{props.titulo}</Typography>: ""}
            <Image src={props.imagem} alt={props.titulo} 
                width= {{xs:"75%",md:"50%"}}
                height= {{md:"50%"}}
                objectFit= "cover"
                borderRadius= "1rem"
                marginY= {{xs:"2rem"}}
            />
            <Box width={{md:"10%"}}></Box>
            <Box
                width={{md:"50%"}}
                display={"flex"}
                flexDirection={"column"}
            >
                {isMobile?"": <Typography fontSize="2rem" fontWeight="1000" paddingBottom="1.5rem">{props.titulo}</Typography>}
                <Typography fontSize={{xs:"0.8rem", md:"1rem"}}><b>descrição:</b> {props.descricao}</Typography>
                <Button
                    height= "3rem"
                    width= "12rem"
                    backgroundColor= {props.buttonbg}
                    color= "#FFF"
                    border= "none"
                    borderRadius= "1rem"
                    fontSize= "1rem"
                    marginTop= {"2rem"}
                >Me leve até lá</Button>
            </Box>
        
        </Box>
    )
}