import BlogCard from '@/app/components/blogCard/blogCard'
import Blog1 from '@/public/images/blog-1.jpg'


const LatestBlogs = () => {
  return (
    <section className="home-wrapper-2 blog-wrapper py-5">
        <div className="container-xxl">
            <div className="col-12">
                <h4 className="section-heading">Our Latest Blogs</h4>
            </div>

            <div className="row">
                <BlogCard 
                    imgSrc={Blog1} 
                    date="09 Dec. 2023"
                    title="A Beautiful Sunday Renaissance"
                    desc={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        A ipsam at deleniti. Enim.`
                    } 
                />
                <BlogCard 
                    imgSrc={Blog1} 
                    date="09 Jan. 2023"
                    title="A Beautiful Sunday Renaissance"
                    desc={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        A ipsam at deleniti. Enim.`
                    }  
                />
                <BlogCard 
                    imgSrc={Blog1} 
                    date="04 Feb. 2023"
                    title="A Beautiful Sunday Renaissance"
                    desc={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        A ipsam at deleniti. Enim.`
                    }  
                />
                <BlogCard 
                    imgSrc={Blog1} 
                    date="12 Aug. 2023"
                    title="A Beautiful Sunday Renaissance"
                    desc={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        A ipsam at deleniti. Enim.`
                    }   
                />
            </div>
        </div>
    </section>
  )
}

export default LatestBlogs