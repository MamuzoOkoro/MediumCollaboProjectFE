import ReviewProps from "../../Component/static/ReviewProps"
import img from "../../asset/medium.png";
import img1 from "../../asset/avatar1.png";
import img2 from "../../asset/avatar2.png";
import img3 from "../../asset/avatar3.png";
import img4 from "../../asset/avatar4.jpg";
import boxImg from "../../asset/image1.png";
import boxImg2 from "../../asset/image2.png";
import boxImg3 from "../../asset/image3.jpg";
import boxImg4 from "../../asset/image4.png";
import boxImg5 from "../../asset/image5.jpg";
import Categories from "./Categories";



const PostReviews = () => {
  return (
    <div className="w-[100]% flex justify-center">
        {/* main */}
        <div className="flex w-[90%]">
            {/* hold */}
    <div className="">
    <ReviewProps
              avatar={img}
              boxImg={boxImg}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    <ReviewProps
              avatar={img1}
              boxImg={boxImg2}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    <ReviewProps
              avatar={img2}
              boxImg={boxImg3}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    <ReviewProps
              avatar={img3}
              boxImg={boxImg4}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    <ReviewProps
              avatar={img4}
              boxImg={boxImg5}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    <ReviewProps
              avatar={img1}
              boxImg={boxImg2}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    <ReviewProps
              avatar={img2}
              boxImg={boxImg3}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
    <ReviewProps
              avatar={img3}
              boxImg={boxImg4}
              name="Barak Obama"
              title="Thank You to America's Librarians for Protecting Our Freedom to Read"
              text="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
        </div>
        {/* main */}
        <Categories/>
        </div>
    </div>
  )
}

export default PostReviews