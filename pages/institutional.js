import styles from '../styles/Institutional.module.css';

export default function Institutional(){
    return(
        <div className={styles.screen}>
            
            <h1 className={styles.title}>Nossos apoiadores</h1>
            <div className={styles.carousel}>
                <img src="/vercel.svg" alt="lorem ipsum" className={styles.image}/>
                <img src="/vercel.svg" alt="lorem ipsum" className={styles.image}/>
                <img src="/vercel.svg" alt="lorem ipsum" className={styles.image}/>
                <img src="/vercel.svg" alt="lorem ipsum" className={styles.image}/>
            </div>
            
            <h1 className={styles.title}>Um pouco mais sobre cada patrocinador</h1>
            <main className={styles.main}>
                {GeneratePatron("/vercel.svg", 1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.")}
                {GeneratePatron("/vercel.svg", 0, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.")}
                {GeneratePatron("/vercel.svg", 1, "lorem ipsum verdammt")}
                {GeneratePatron("/vercel.svg", 0, "lorem ipsum verdammt")}
            </main>
        </div>
    )
}

const GeneratePatron = (image, num, text) => {
    if (num == 1) {
        return(
            <div className={styles.generatePatron1}>
                <img src={image} />
                <p className={styles.contentText}>{text}</p>
            </div>
        )
    } else {
        return(
            <div className={styles.generatePatron2}>
                <p className={styles.contentText}>{text}</p>
                <img src={image} />
            </div>
        )
    }
}