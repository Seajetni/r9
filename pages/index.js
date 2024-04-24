import { CardDefault } from "@/components/home/card";
import Layout from "@/components/Layout";

export default function Home() {
   const content = [
    {
       img: "https://th.bing.com/th/id/R.324f012eba7130b64e96fda8489a0eae?rik=9t1nkm2C4OsFpA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_knN37zlSFtA%2fR2c2ZMQKArI%2fAAAAAAAAAD8%2fwF76PHRm2ik%2fs400%2funtitled.bmp&ehk=GoMJfWyOK1pr2VStoxQBfFamP4kTrRYv%2bM%2fnVZNZWaw%3d&risl=&pid=ImgRaw&r=0" ,
       title: "ความหมายของเศรษฐกิจพอเพียง" ,
       details: " l sit repudiandae delectus, error quos totam obcaecati quam, natus beatae in aut odio!" 
    },
    {
      img: "https://img.winnews.tv/files/site/d889f8463c6772fb3628960833068946.jpg" ,
      title: "หลักปรัชญาของเศรษฐกิจพอเพียง" ,
      details: " l sit repudiandae delectus, error quos totam obcaecati quam, natus beatae in aut odio!"
   },
   {
    img: "https://th.bing.com/th/id/OIP.E0jFJGNwPLOyRjetd6ADlQHaHa?rs=1&pid=ImgDetMain" ,
    title: "หลัก 3 ห่วง 2 เงื่อนไข" ,
    details: " l sit repudiandae delectus,  l sit repudiandae delectuserror quos totam obcaecati quam, natus beatae in aut odio!"
 }
   ]
   const content2 = [
    {
       img: "https://i.pinimg.com/originals/ef/bb/06/efbb06418df132dc9605093744aeebb1.jpg" ,
       title: "พระราชดำรัชเศรษกิจพอเพียง" ,
       details: " l sit repudiandae delectus, error quos totam obcaecati quam, natus beatae in aut odio!" 
    },
    {
      img: "https://f.ptcdn.info/244/071/000/qi4j9m4ivbtFl4C8pHR3-o.jpg" ,
      title: "เเนวพระราชดำริในการดำเนินชีวิตเเบบพอเพียง" ,
      details: " l sit repudiandae delectus, error quos totam obcaecati quam, natus beatae in aut odio!"
   },
   {
    img: "https://th.bing.com/th/id/OIP.w8LD2UvZ5fNcOBMxULPa1AHaEv?rs=1&pid=ImgDetMain" ,
    title: "การนำหลักปรัชซญาเศรษฐกิจพอเพียงไปใช้" ,
    details: " l sit repudiandae delectus, error quos totam obcaecati quam, natus beatae in aut odio!"
 }
   ]
  return (
    <Layout>
      <div>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
          <div className="min-h-28 ">
            <div className="max-w-screen-lg mx-auto py-4">
             
          
              <h2 className="font-bold text-center text-6xl text-slate-700 font-display">
              เศรษฐกิจพอเพียง
              </h2>
              <p className="text-center mt-4 font-medium text-slate-500">
                - ในหลวงรัชกาลที่9 -
              </p>
           
              <div className="rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-white before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-emerald-600 before:opacity-80">
                <video
                  className="absolute z-10 object-cover  w-full rounded-lg"
                  controls
                  autoPlay
                  loop
               
                >
                  <source
                    src="/home.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <a
                  href=""
                  className="absolute z-20  top-1/2  right-20 text-white -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-20 h-20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </a>
                <div className="relative z-20 p-10 h-full w-1/2">
                  <h2 className="text-white text-3xl font-semibold">
                    ในหลวงรัชกาลที่9
                  </h2>
                  <h3 className="text-white text-xl">
                  รักพ่อ...ไม่มีวันพอเพียง
                  </h3>
                  <p className="text-sm text-slate-200 mt-4 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga veritatis officiis cupiditate sed sint natus alias
                    placeat, asperiores tempore reiciendis.
                  </p>
                 
                </div>
              </div>

              <div className="gap-6 mt-6 ">
                <CardDefault  content={content}/>
                <br/>
                <CardDefault content={content2} />
           
              </div>
              <div className="flex gap-6 mt-6 ">
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
