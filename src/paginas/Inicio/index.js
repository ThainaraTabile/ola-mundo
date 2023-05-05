
import styles from "./Inicio.module.css"
import posts from "../../json/post.json"
import Post from "../../componentes/PostCard";

export default function Inicio() {
    return (
       
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>

    )
}