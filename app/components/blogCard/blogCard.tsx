import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import styles from './blogCard.module.css'

interface BlogCardPropsType {
    imgSrc: StaticImageData
    date: string
    title: string
    desc: string
}

const BlogCard: React.FC<BlogCardPropsType> = ({ 
    imgSrc, 
    date, 
    title, 
    desc 
}) => {
  return (
    <div className={`${styles.blog_card_wrapper}`}>
        <div className={`${styles.blog_card}`}>
            <div className={`${styles.card_image}`}>
                <Image 
                    src={imgSrc} 
                    alt='blog' 
                    className='img-fluid w-100' 
                    priority 
                />
            </div>
            
            <div className={`${styles.blog_content}`}>
                <div className={`${styles.blog_content_wrapper}`}>
                    <p className={`${styles.date}`}>{date}</p>
                    <h6 className={`${styles.title}`}>{title}</h6>
                    <p className={`${styles.desc}`}>{desc}</p>
                    <Link href='#' className='button'>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard