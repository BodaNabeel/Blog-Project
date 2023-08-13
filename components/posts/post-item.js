import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css"
function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/post/${slug}/${image}`
  return (
    <li className={classes.post}>
      <Link>
        <div>
          <Image className={classes.image} src={imagePath} alt={title} width={300} height={200}/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedData}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
export default PostItem;
